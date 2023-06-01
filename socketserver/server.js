// const app = require('express')();
const express = require('express')
const app = express()

const http = require('http').createServer(app);
const io = require('socket.io')(http);

// Will be in db in real world
const users = [];
const messages = [];
let currentId = 0;

app.get('/', (req, res)=> {
    res.send('<h1>Hello World</h1>');
});

http.listen(3000, ()=>{
    console.log('listening on port 3000');
});

// Inicializar productos
const candidates = {
    "0":{votes: 0, label: 'UPS', color: randomRGB() },
    "1":{votes: 0, label: 'Aires de precisión', color: randomRGB() },
    "2":{votes: 0, label: 'Baterias de litio', color: randomRGB() },
    "3":{votes: 0, label: 'Rectificadores', color: randomRGB() },
    "4":{votes: 0, label: 'Reguladores de voltaje', color: randomRGB() },
    "5":{votes: 0, label: 'Transformadores secos', color: randomRGB() },
}

function randomRGB() {
    const r = () => Math.random() * 256 >> 0;
    return `rgb(${r()}, ${r()}, ${r()})`;
}

io.on('connection', (socket) =>{
    dataUpdate(socket);

    console.log('Nuevo cliente conectado ', socket.id)
    // Mandar datos
    io.emit('update', candidates)

    // Cuando alguien selecciona una opcion
    socket.on('vote',(index, valor) => {
        console.log('Voto ', socket.id);
        if(candidates[index]){
            candidates[index].votes += valor
        }

        // Mostrar si alguien voto
        io.emit('update',candidates)
    });

    socket.on('reset',(index) => {
        console.log('Reset ', socket.id);
        candidates[0].votes = 0
        candidates[1].votes = 0
        candidates[2].votes = 0
        candidates[3].votes = 0
        candidates[4].votes = 0
        candidates[5].votes = 0
        // Mostrar si alguien voto
        io.emit('update',candidates)
    });

    socket.on("connect",() =>{
        console.log("CONECTADO", socket.id);
    })

    socket.on("disconnect",() =>{
        console.log("Desconectado", socket.id);
    })

    socket.on("reconnecting",() =>{
        console.log("Reconectado", socket.id);
    })
    // ===================================================================
    // CHAT
    console.log("LOG:: a user connected");
    socket.emit("get users list", JSON.stringify(users));
    socket.emit("get messages history", JSON.stringify(messages));

    socket.on("message", function(msg) {
        console.log("LOG:: message from UserId: " + msg.userId + " --> " + msg.text);
        const message = {
            ...msg,
            timestamp: new Date()
        };
        messages.push(message);
        io.emit("message", JSON.stringify(message));
    });

    socket.on("user name added", function(name) {
        console.log("LOG:: user '" + name + "' entered the room");
        const newUser = {
            name,
            id: ++currentId,
            isCurrent: false
        };
        users.push(newUser);
        socket.emit("my user added", JSON.stringify(newUser));
        io.emit("user name added", JSON.stringify(newUser));
    });
});

function dataUpdate(socket) {
    socket.emit('dataupdate', Array.from({length: 8}, ()=> Math.floor(Math.random() * 40)));

    setTimeout(() =>{
        dataUpdate(socket);
    }, 2000)
}
import {   Component, OnInit, ChangeDetectionStrategy, ChangeDetectorRef, Output, EventEmitter } from '@angular/core';
import { SocketService } from 'src/app/socket.service';
import * as io from 'socket.io-client';
import { IMessage, IUser } from 'src/assets/interfaces/shared.interface';
@Component({
  selector: 'app-chat-app',
  templateUrl: './chat-app.component.html',
  styleUrls: ['./chat-app.component.css'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class ChatAppComponent implements OnInit {

  @Output() parametrosSeleccionados = new EventEmitter<any>();

  title = 'primerChart';
  chart;
  articuloSeleccionado = "1";
  cantidadSeleccionado = "1";
  socket: any;

  constructor( private srv: SocketService, private cdr: ChangeDetectorRef){
    this.socket = io('http://localhost:3000');
  }

  public currentUser: IUser;
  public usersList: IUser[] = [];
  public messages: IMessage[] = [];
  public selectedUser: IUser;


  ngOnInit() {
    this.initSocketListener();
  }

  private initSocketListener() {
    this.socket.on("get users list", (users: string) => {
      this.usersList = [...JSON.parse(users)];
      this.cdr.markForCheck();
    });

    this.socket.on("get messages history", (messages: string) => {
      const historyMessages = [...JSON.parse(messages)];
      this.messages = historyMessages.map(message => {
        return {
          ...message,
          userName: this.getUserNameById(message.userId)
        };
      });
      this.cdr.markForCheck();
    });

    this.socket.on("message", (message: string) => {
      const msg = JSON.parse(message);
      this.messages = [
        ...this.messages,
        {
          ...msg,
          userName: this.getUserNameById(msg.userId)
        }
      ];
      this.cdr.markForCheck();
    });

    this.socket.on("user name added", (user: string) => {
      const newUser = JSON.parse(user);
      this.usersList = [
        ...this.usersList,
        {
          ...newUser,
          isCurrent: this.currentUser
            ? newUser.id === this.currentUser.id
            : false
        }
      ];
      this.cdr.markForCheck();
    });

    this.socket.on("my user added", (user: string) => {
      const createdUser = JSON.parse(user);
      this.currentUser = {
        ...createdUser,
        isCurrent: true
      };
    });
  }


  private getUserNameById(userId: number) {
    const user = this.usersList.find(user => user.id === userId);
    return user ? user.name : "anonymous";
  }

  public handleName(name: string) {
    this.socket.emit("user name added", name);
  }

  public handleMessage(text: string) {
    const msg: any = {
      text,
      userId: this.currentUser.id
    };
    this.socket.emit("message", msg);
  }

  public handleUserSelect(user: IUser) {
    this.selectedUser = user;
  }
}

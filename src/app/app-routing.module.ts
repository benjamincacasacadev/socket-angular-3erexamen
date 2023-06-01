import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { NavbarComponent } from './components/navbar/navbar.component';
import { HomeComponent } from './components/home/home.component';
import { ChartRandomComponent } from './components/chart-random/chart-random.component';
import { ChartGeneralComponent } from './components/chart-general/chart-general.component';
import { ProductosComponent } from './components/productos/productos.component';
import { ContactoComponent } from './components/contacto/contacto.component';
// import { ListadoGeneralComponent } from './components/listado-general/listado-general.component';
// import { ListadoNoticiasComponent } from './components/listado-noticias/listado-noticias.component';
// import { TechnewsComponent } from './components/technews/technews.component';
// import { SportsnewsComponent } from './components/sportsnews/sportsnews.component';
// import { BuscarfechaComponent } from './components/buscarfecha/buscarfecha.component';

const routes: Routes = [
  {path: '', component: HomeComponent},
  {path: 'products', component: ProductosComponent},
  {path: 'random', component: ChartRandomComponent},
  {path: 'charts', component: ChartGeneralComponent},
  {path: 'contact', component: ContactoComponent},
  // {path: 'tech', component: TechnewsComponent},
  // {path: 'sports', component: SportsnewsComponent},
  // {path: 'search', component: ListadoNoticiasComponent},
  // {path: 'searchDate', component: BuscarfechaComponent},
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }

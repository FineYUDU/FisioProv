import { Component } from '@angular/core';

export interface NavItem{
  texto:string;
  ruta:string;
}

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styles: [
  ]
})
export class NavbarComponent {


  templateNav:NavItem[] = [
    {
      texto:'Inicio',
      ruta:'./components/inicio'
    },
    {
      texto:'Nosostros',
      ruta:'./components/nosotros'
    },
    {
      texto:'Productos',
      ruta:'./components/productos'
    },
    {
      texto:'Contacto',
      ruta:'./components/contacto'
    },
  ] 
  

}

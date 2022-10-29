import { Component } from '@angular/core';
import { NavItem } from '../navbar/navbar.component';



@Component({
  selector: 'app-footer',
  templateUrl: './footer.component.html',
  styles: [
  ]
})
export class FooterComponent {

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

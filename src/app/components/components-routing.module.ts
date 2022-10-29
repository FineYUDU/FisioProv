import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { AboutComponent } from './about/about.component';
import { ContactComponent } from './contact/contact.component';
import { HomeComponent } from './home/home.component';
import { ProductsComponent } from './products/products.component';

const routes: Routes = [
  {
    path:'',
    children: [
      {path:'inicio', component:HomeComponent},
      {path:'nosotros', component:AboutComponent},
      {path:'productos', component:ProductsComponent},
      {path:'contacto', component:ContactComponent},
      {path:'**', redirectTo:'inicio'}
    ]
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
})
export class ComponentsRoutingModule { }

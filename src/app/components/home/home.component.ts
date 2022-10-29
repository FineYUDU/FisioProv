import { Component } from '@angular/core';

interface Slideshow {
  img:string;
}


@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styles: [
  ]
})
export class HomeComponent {

  templateSlide:Slideshow[]=[
    {
      img:'slideshow_01',
    },
    {
      img:'slideshow_02',
    },
    {
      img:'slideshow_03',
    }
]
}

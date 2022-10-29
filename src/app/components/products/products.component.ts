import { Component} from '@angular/core';

interface Product {
  img:string;
  numero:number;
  nombre:string;
  precio:number;
  descripcion:string;
  
}

@Component({
  selector: 'app-products',
  templateUrl: './products.component.html',
  styles: [
  ]
})
export class ProductsComponent {

  templateProd:Product[] = [
    {
      img:'cards-1',
      numero:1,
      nombre:'Physio',
      precio:42108,
      descripcion:'Estimulador portátil de 4 canales que fue desarrollado para tratar todas las indicaciones en Electroterapia. Cuenta además con protocolos específicos para urología, hiperhidrosis, manejo de musculatura denervada y prevención de edemas. También tiene la exclusiva tecnología Muscle Intelligence que permite que la terapia se adapte a las necesidades fisiológicas de cada paciente para conseguir una sesión más personalizada.'
    },
    {
      img:'cards-2',
      numero:2,
      nombre:'Intelect® Mobile Ultra',
      precio:49554,
      descripcion:'El equipo de ultrasonido, Intelect® Mobile Ultra, esta clínicamente probado para proporcionar los mejores resultados de los tratamientos, mediante el uso de un transductor de alta calidad de ultrasonido. Su diseño ligero permite su utilización en carros, mesas, paredes o su uso móvil. El aplicador esta diseñado para proporcionar eficientemente un ultrasonido sin ninguna molestia para el paciente.'
    },
    {
      img:'cards-3',
      numero:3,
      nombre:'Intelect® Advanced Stim',
      precio:73826,
      descripcion:'El Intelect® Advanced Stim es una unidad de electroterapia que brinda una mayor facilidad de uso, comodidad y personalización para optimizar el tratamiento del paciente. Además, de que se pueden agregar módulos adicionales para ofrecer a sus pacientes una terapia completa y mejora continua.'
    },
    {
      img:'cards-4',
      numero:4,
      nombre:'Wireless Pro 4 Canales',
      precio:64616,
      descripcion:'Unidad de electroterapia inalámbrica de 4 canales que te permite combinar la electroestimulación con ejercicios activos para mejorar la eficacia y resultados de la terapia. Tiene dos controles para gestionar de forma independiente varias sesiones simultáneamente. También cuenta con la exclusiva tecnología Muscle Intelligence que permite que la terapia se adapte a las necesidades fisiológicas de cada paciente para conseguir una sesión más personalizada con los beneficios de la libertad inalámbrica.'
    },
    {
      img:'cards-5',
      numero:5,
      nombre:'Intelect® Mobile Láser',
      precio:64616,
      descripcion:'El Intelect® Mobile Láser, es un láser terapéutico de bajo nivel de riesgo 3B. Proporciona una disminución del dolor de forma rápida debido a que la energía emitida por sonda es absorbida a través de los tejidos. '
    },
    {
      img:'cards-6',
      numero:6,
      nombre:'Compresa Eléctrica Theratherm',
      precio:4488,
      descripcion:'La compresa de calor húmedo digital Theratherm es práctica y cuenta con un control manual digital para que el operador programe y controle la temperatura y/o el tiempo de tratamiento.'
    },
  ]

}

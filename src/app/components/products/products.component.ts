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
    {
      img:'cards-7',
      numero:7,
      nombre:'Rehab',
      precio:25251,
      descripcion:'Unidad portátil de electroterapia de 4 canales que fue desarrollado para tratar las patologías más comunes como dolor y problemas vasculares, así como para dar estimulación muscular. Rehab viene preparado con la exclusiva tecnología Muscle Intelligence que permite que la terapia se adapte a las necesidades fisiológicas de cada paciente para conseguir una sesión más personalizada (Cables Mi No incluidos).'
    },
    {
      img:'cards-8',
      numero:8,
      nombre:'Theta',
      precio:33656,
      descripcion:'Unidad portátil de electroterapia de 4 canales con un rango más amplio de programas. Adicionalmente a los protocolos estándar, cuenta con programas para tratar lumbalgia, cervicalgia, manguito rotador, Epicondilitis, espasticidad, pie hemipléjico, ligamentoplastia post LCA, programas de resistencia y fuerza explosiva. Cuenta con la exclusiva tecnología Muscle Intelligence que permite que la terapia se adapte a las necesidades fisiológicas de cada paciente para conseguir una sesión más personalizada.'
    },
    {
      img:'cards-9',
      numero:9,
      nombre:'Hydrocollator',
      precio:4488,
      descripcion:'Los compreseros de termoterapia Hydrocollator son fabricados en acero inoxidable con control termostático que garantiza la temperatura terapéutica ideal de las compresas. Su aislación completa con fibra asegura el mínimo uso de energía y previene las pérdidas de calor. De fácil mantención.'
    },
    {
      img:'cards-10',
      numero:10,
      nombre:'Electrodo Dura-Stick Plus Cuadrado Espuma 5x5 cable',
      precio:206,
      descripcion:'Electrodos autoadheribles cuadrados que brindan estimulación cómoda y efectiva ya que mejoran la conducción de la electricidad. Evitan el uso de gel y cinta para pegar, aumentando la calidad terapéutica, ya que posee 100% de distribución de corriente en la superficie del electrodo. '
    },
    {
      img:'cards-11',
      numero:11,
      nombre:'Tru-Trac',
      precio:4488,
      descripcion:'El sistema Tru-Trac es una unidad de tracción estática, intermitente o cíclica, que proporciona tratamiento del dolor que llega a la raíz del dolor cervical y lumbar mediante patrones de tracción programables. Es útil para afecciones agudas, subagudas y crónicas.'
    },
    {
      img:'cards-12',
      numero:12,
      nombre:'Triton DTS®',
      precio:4488,
      descripcion:'El sistema Triton DTS® ofrece un sistema completo con una mesa exclusivamente diseñada para la columna vertebral, una sofisticada unidad de tracción y un sencillo sistema de arneses. Incorpora un adaptador de tracción cervical, rodillos y un accesorio de biorretroalimentación de la presión lumbar. Emplea patrones de tracción por descompresión totalmente programables que imitan la sensación y la eficacia del tratamiento manual.'
    },
    {
      img:'cards-13',
      numero:13,
      nombre:'Tracción Cervical Saunders®',
      precio:4488,
      descripcion:'Equipo de tracción cervical para la reducción del dolor y tono muscular, aumento de la amplitud de movimiento y flexibilidad, reducción de edema y hernia discal, así como para el alivio de la compresión de la raíz nerviosa, entre otros.'
    },
    {
      img:'cards-14',
      numero:14,
      nombre:'Tracción Lumbar HomeTrac Saunders®',
      precio:4488,
      descripcion:'Equipo de tracción lumbar para la reducción del dolor y tono muscular, aumento de la amplitud de movimiento y flexibilidad, reducción de edema y hernia discal, así como para el alivio de la compresión de la raíz nerviosa, entre otros.'
    },
    {
      img:'cards-15',
      numero:15,
      nombre:'Fluidoterapia',
      precio:4488,
      descripcion:'Unidades de fluidoterapia que proporcionan potente acción de masaje que transmite calor y estimulación táctil para lograr numerosos beneficios fisiológicos y terapéuticos. Las unidades de Fluidoterapia de Chattanooga utilizan un flujo de aire caliente que circula a través de un granulado, Cellex(R), la cual provoca la levitación de la mano o pie, generando calor seco.'
    },
    {
      img:'cards-16',
      numero:16,
      nombre:'Active K',
      precio:4488,
      descripcion:'Active-K es una unidad motorizada que ofrece una gama exclusiva de programas de rehabilitación. Permite a los pacientes recuperar la movilidad de las articulaciones de la cadera y rodillas sin dolor. Se puede empezar a utilizar después de una intervención quirúrgica. Es un complemento importante en hospitales, clínicas y consultorios de medicina general.'
    },
  ]

}

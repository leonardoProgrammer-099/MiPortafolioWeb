import { Component, OnInit } from '@angular/core';


@Component({
  selector: 'app-proyectos',
  templateUrl: './proyectos.component.html',
  styleUrls: ['./proyectos.component.css']
})
export class ProyectosComponent implements OnInit {


  proyects : any[] = [
    {
      img : '../../assets/img/ptoyects/hnos transmedinas/1.png',
      text: 'Programa para el monitoreo de viajes de lazaro cardenas',
      btnGit: true,
      btnDemo: false,
      urlGit:'https://github.com/leogarcia99/sofwarehnostransmedina.git',
      urlDemo:''
    },
    {
      img : '../../assets/img/ptoyects/detector de rostro/1.jpg',
      text: 'Deteccion de rostros y detector de expresiones',
      btnGit: true,
      btnDemo: true,
      urlGit:'https://github.com/leogarcia99/Reconocimento-de-rostro.git',
      urlDemo:'https://detectar-rostro-3ee10.web.app/'
    },
    {
      img : '../../assets/img/ptoyects/diseñoOTC/1.png',
      text: 'Diseño para pagina web de compra y venta de oro',
      btnGit: true,
      btnDemo: false,
      urlGit:'https://github.com/leogarcia99/Dise-owebOtc.git',
      urlDemo:''
    },
    {
      img : '../../assets/img/ptoyects/coffeestore/1.png',
      text: 'Tienda Online para comprar cafe',
      btnGit: true,
      btnDemo: false,
      urlGit:'https://github.com/leogarcia99/Coffeestore.git',
      urlDemo:''
    },
    {
      img : '../../assets/img/ptoyects/tiendafarmacia/1.png',
      text: 'Pagina web de farmacias san juan',
      btnGit: true,
      btnDemo: false,
      urlGit:'https://github.com/leogarcia99/farmaciaSanjuan.git',
      urlDemo:''
    },
    {
      img : '../../assets/img/ptoyects/dipeli/1.png',
      text: 'Software para la gestion de compra , venta , registro e inventario de peliculas',
      btnGit: false,
      btnDemo: false,
      urlGit:'',
      urlDemo:''
    }
  ];
  constructor() { }

  ngOnInit(): void {
  }

}

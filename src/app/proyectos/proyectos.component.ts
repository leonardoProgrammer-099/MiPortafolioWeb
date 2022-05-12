import { Component, OnInit } from '@angular/core';


@Component({
  selector: 'app-proyectos',
  templateUrl: './proyectos.component.html',
  styleUrls: ['./proyectos.component.css']
})
export class ProyectosComponent implements OnInit {


  proyects : any[] = [
    {
      img : 'https://firebasestorage.googleapis.com/v0/b/leonardo-portafolio.appspot.com/o/hnos.png?alt=media&token=8314456d-7d55-4079-856d-7d79a5de68b0',
      text: 'Programa para el monitoreo de viajes de lazaro cardenas',
      btnGit: true,
      btnDemo: false,
      urlGit:'https://github.com/leogarcia99/sofwarehnostransmedina.git',
      urlDemo:''
    },
    {
      img : 'https://firebasestorage.googleapis.com/v0/b/leonardo-portafolio.appspot.com/o/1.jpg?alt=media&token=bc06b690-e9a4-4342-a841-4ffd111d9fac',
      text: 'Deteccion de rostros y detector de expresiones',
      btnGit: true,
      btnDemo: true,
      urlGit:'https://github.com/leogarcia99/Reconocimento-de-rostro.git',
      urlDemo:'https://detectar-rostro-3ee10.web.app/'
    },
    {
      img : 'https://firebasestorage.googleapis.com/v0/b/leonardo-portafolio.appspot.com/o/disen%CC%83o.png?alt=media&token=f8dc9568-98c5-43bc-932e-0634ef1ea746',
      text: 'Diseño para pagina web de compra y venta de oro',
      btnGit: true,
      btnDemo: false,
      urlGit:'https://github.com/leogarcia99/Dise-owebOtc.git',
      urlDemo:''
    },
    {
      img : 'https://firebasestorage.googleapis.com/v0/b/leonardo-portafolio.appspot.com/o/coffee.png?alt=media&token=a95cf3bd-1f81-4b81-9c6d-0f0667f378aa',
      text: 'Tienda Online para comprar cafe',
      btnGit: true,
      btnDemo: false,
      urlGit:'https://github.com/leogarcia99/Coffeestore.git',
      urlDemo:''
    },
    {
      img : 'https://firebasestorage.googleapis.com/v0/b/leonardo-portafolio.appspot.com/o/famacia.png?alt=media&token=429686d3-aadc-400c-ae03-52c9b148720e',
      text: 'Pagina web de farmacias san juan',
      btnGit: true,
      btnDemo: false,
      urlGit:'https://github.com/leogarcia99/farmaciaSanjuan.git',
      urlDemo:''
    },
    {
      img : 'https://firebasestorage.googleapis.com/v0/b/leonardo-portafolio.appspot.com/o/1.png?alt=media&token=613e6446-7006-4c38-9d20-fe492c8b5a9a',
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

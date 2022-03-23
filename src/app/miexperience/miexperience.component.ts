import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-miexperience',
  templateUrl: './miexperience.component.html',
  styleUrls: ['./miexperience.component.css']
})
export class MiexperienceComponent implements OnInit {

  constructor() { }
front : any[] =[
 {
   nombre: 'HTML',
   porcentaje : 100
 },
 {
  nombre: 'CSS',
  porcentaje : 70
},
{
  nombre: 'JAVASCRIPT',
  porcentaje : 60
},
{
  nombre: 'TYPESCRIPT',
  porcentaje : 60
},
{
  nombre: 'BOOTSTRAP',
  porcentaje : 70
},
{
  nombre: 'ANGULAR',
  porcentaje : 90
},
{
  nombre: 'IONIC',
  porcentaje : 50
},
{
  nombre: 'STRUCS2',
  porcentaje : 50
},


]

back : any[]=[
  {
    nombre: 'JAVA',
    porcentaje : 80
  },
  {
    nombre: 'PYTHON',
    porcentaje : 60
  },
  {
    nombre: 'C#',
    porcentaje : 80
  },
  {
    nombre: 'MYSQL',
    porcentaje : 80
  },
  {
    nombre: 'MONGODB',
    porcentaje : 30
  },
  {
    nombre: 'KOTLIN',
    porcentaje : 40
  },
  {
    nombre: 'DART',
    porcentaje : 40
  },
  {
    nombre: 'ASP.NET',
    porcentaje : 50
  },

]
  ngOnInit(): void {
  }

}

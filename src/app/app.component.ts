import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})


export class AppComponent {
  title = 'portafolioWeb';
   
 
  button1(){
    document.getElementById('a1')?.classList.add('bg-secundario');
    document.getElementById('a2')?.classList.remove('bg-secundario');
    document.getElementById('a3')?.classList.remove('bg-secundario');
    document.getElementById('a4')?.classList.remove('bg-secundario');
    document.getElementById('a5')?.classList.remove('bg-secundario');
  }

  button2(){
    document.getElementById('a1')?.classList.remove('bg-secundario');
    document.getElementById('a2')?.classList.add('bg-secundario');
    document.getElementById('a3')?.classList.remove('bg-secundario');
    document.getElementById('a4')?.classList.remove('bg-secundario');
    document.getElementById('a5')?.classList.remove('bg-secundario');
  }

  button3(){
    document.getElementById('a1')?.classList.remove('bg-secundario');
    document.getElementById('a2')?.classList.remove('bg-secundario');
    document.getElementById('a3')?.classList.add('bg-secundario');
    document.getElementById('a4')?.classList.remove('bg-secundario');
    document.getElementById('a5')?.classList.remove('bg-secundario');
  }

  button4(){
    document.getElementById('a1')?.classList.remove('bg-secundario');
    document.getElementById('a2')?.classList.remove('bg-secundario');
    document.getElementById('a3')?.classList.remove('bg-secundario');
    document.getElementById('a4')?.classList.add('bg-secundario');
    document.getElementById('a5')?.classList.remove('bg-secundario');
  }

  button5(){
    document.getElementById('a1')?.classList.remove('bg-secundario');
    document.getElementById('a2')?.classList.remove('bg-secundario');
    document.getElementById('a3')?.classList.remove('bg-secundario');
    document.getElementById('a4')?.classList.remove('bg-secundario');
    document.getElementById('a5')?.classList.add('bg-secundario');
  }

  
}



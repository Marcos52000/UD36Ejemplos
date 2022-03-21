import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})

export class AppComponent {
  title = 'dados';

  valor1 : number;
  valor2 : number;
  valor3 : number;
  resultado: string | undefined;

  constructor(){
    this.valor1 = this.retornarAleatoria();
    this.valor2 = this.retornarAleatoria();
    this.valor3 = this.retornarAleatoria();
  }

  retornarAleatoria(){
    return Math.trunc(Math.random() * 6) + 1;
  }

  tirar(){
    this.valor1 = this.retornarAleatoria();
    this.valor2 = this.retornarAleatoria();
    this.valor3 = this.retornarAleatoria();

    if(this.valor1 == this.valor2 && this.valor1 == this.valor3){
      this.resultado = "gano";
    }else{
      this.resultado = "perdio";
    }
  }
}

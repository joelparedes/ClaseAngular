import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-presentacion',
  templateUrl: './presentacion.component.html',
  styleUrls: ['./presentacion.component.css']
})
export class PresentacionComponent implements OnInit {

  public nombre: string = 'Joel E. Paredes Abreu';
  public bio: string = 'Responsabilidad, liderazgo, honestidad son unas de mis cualidades laborales. Soy una persona con alta capacidad de aprendizaje y competencias como trabajo en equipo, buena comunicación, capacidad de análisis para resolver problemas, y habilidad para trabajar con nuevas tecnologías';

  constructor() { }

  ngOnInit() {
  }

  public getNombre() {
    return this.nombre;
  }

  public getBio(){
    return this.bio;
  }

}

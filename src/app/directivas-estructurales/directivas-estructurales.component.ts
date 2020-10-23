import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-directivas-estructurales',
  templateUrl: './directivas-estructurales.component.html',
  styleUrls: ['./directivas-estructurales.component.css']
})
export class DirectivasEstructuralesComponent implements OnInit {

  public nuevoNombre: string = "";
  public mostrarNombre: string = "";
  public lista: any = [
    'Nombre 1',
    'Nombre 2',
    'Nombre 3'
  ];

  constructor() { }

  ngOnInit() {
  }

  public addNombre(){
    this.lista.push(this.nuevoNombre);
    this.nuevoNombre = '';
  }

  public alertNombre(nombre:string){
    this.mostrarNombre = nombre;
    return this.mostrarNombre;
  }

}

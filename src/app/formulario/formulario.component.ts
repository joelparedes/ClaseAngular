import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup } from '@angular/forms';

@Component({
  selector: 'app-formulario',
  templateUrl: './formulario.component.html',
  styleUrls: ['./formulario.component.css']
})
export class FormularioComponent implements OnInit {

  public nombreControl: FormControl = new FormControl('');
  public apellidoControl: FormControl = new FormControl('');
  public emailControl: FormControl = new FormControl('');
  public passwordControl: FormControl = new FormControl('');
  public form: FormGroup = new FormGroup({
    'nombreControl': this.nombreControl,
    'apellidoControl': this.apellidoControl,
    'emailControl': this.emailControl,
    'passwordControl': this.passwordControl

  });

  constructor() {

    //Este metodo es para agregar nuevos controls a un FormGroup existente.
    /* this.form.addControl(
    'nombreControl': this.nombreControl,
    'apellidoControl': this.apellidoControl,
    'emailControl': this.emailControl,
    'passwordControl': this.passwordControl);*/

   }

  ngOnInit() {
  }

  public save(){
    console.log(this.form.value);
  }

}

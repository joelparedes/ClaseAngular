import { BrowserModule } from '@angular/platform-browser';
import { NgModule, Component } from '@angular/core';

import { AppComponent } from './app.component';
import { RouterModule } from '@angular/router';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { PresentacionComponent } from './presentacion/presentacion.component';
import { FormularioComponent } from './formulario/formulario.component';
import { DirectivasEstructuralesComponent } from './directivas-estructurales/directivas-estructurales.component';

@NgModule({
  declarations: [
    AppComponent,
    PresentacionComponent,
    FormularioComponent,
    DirectivasEstructuralesComponent
  ],
  imports: [
    BrowserModule,
    FormsModule, 
    ReactiveFormsModule, 
    RouterModule.forRoot([
      {path: 'presentacion', component: PresentacionComponent},
      {path: 'mi-formulario', component: FormularioComponent},
      {path: 'directivas-estructurales', component: DirectivasEstructuralesComponent}
    ])
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }

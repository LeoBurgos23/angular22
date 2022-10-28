
import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';


import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { NavbarComponent } from './component/navbar/navbar.component';
import { ToolbarComponent } from './component/toolbar/toolbar.component';
import { StudentComponent } from './component/student/student.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { DirectivasComponent } from './component/directivas/directivas.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { AbmalumnosComponent } from './component/abmalumnos/abmalumnos.component';
import { MaterialModule } from 'material/material/material/material.module';
import {CursosComponent} from './component/cursos/cursos.component';
import { DialogComponent } from './component/dialog/dialog.component'


@NgModule({
  declarations: [
    AppComponent,
    NavbarComponent,
    ToolbarComponent,
    StudentComponent,
    DirectivasComponent,
    AbmalumnosComponent,
    CursosComponent,
    DialogComponent
    
    
    
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    ReactiveFormsModule,
    BrowserAnimationsModule,
    MaterialModule,
    FormsModule,
    ReactiveFormsModule,

   
    
    ],
    exports: [
      MaterialModule
    ],
  

  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
  
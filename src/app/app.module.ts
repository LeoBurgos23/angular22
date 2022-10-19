
import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';


import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { NavbarComponent } from './component/navbar/navbar.component';
import { ToolbarComponent } from './component/toolbar/toolbar.component';
import { StudentComponent } from './component/student/student.component';
import { ReactiveFormsModule } from '@angular/forms';
import { DirectivasComponent } from './component/directivas/directivas.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { AbmalumnosComponent } from './component/abmalumnos/abmalumnos.component';
import { MaterialModule } from 'material/material/material/material.module';



@NgModule({
  declarations: [
    AppComponent,
    NavbarComponent,
    ToolbarComponent,
    StudentComponent,
    DirectivasComponent,
    AbmalumnosComponent,
    
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    ReactiveFormsModule,
    BrowserAnimationsModule,
    MaterialModule
   
    
    ],
  

  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
  
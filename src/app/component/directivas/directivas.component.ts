import { Component, OnInit } from '@angular/core';
import { Persona } from 'src/app/models/persona';

@Component({
  selector: 'app-directivas',
  templateUrl: './directivas.component.html',
  styleUrls: ['./directivas.component.css']
})
export class DirectivasComponent implements OnInit {

  Desaprobados: number= 6;

  ListadeAlumnos: Array <Persona> =[ 
    { nombre: 'Harry' , apellid: 'Poter' ,nota:8 , estado: 'activo'},
    { nombre: 'Hermione' , apellid: 'Granger' ,nota:10 , estado: 'activo'},
    { nombre: 'Ron' , apellid: 'Wesleay' ,nota:5 , estado: 'activo'},
    { nombre: 'Draco' , apellid: 'Malfoy' ,nota:7 , estado: 'activo'},
    { nombre: 'Neville' , apellid: 'Longbotton' ,nota:3 , estado: 'libre'},
    { nombre: 'Cho' , apellid: 'Chang' ,nota:9 , estado: 'activo'},
    { nombre: 'Luna' , apellid: 'Lovegood' ,nota:6 , estado: 'activo'},



  ]

  constructor() { }

  ngOnInit(): void {
  }

}

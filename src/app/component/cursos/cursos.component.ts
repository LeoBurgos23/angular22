import { Component, OnInit } from '@angular/core';
import { Curso } from 'src/app/models/persona'
@Component({
  selector: 'app-cursos',
  templateUrl: './cursos.component.html',
  styleUrls: ['./cursos.component.css']
})
export class CursosComponent implements OnInit {

  curso: Curso [] = [ {
    nombre: 'POSIONES',
    comision:205,
    profesor:'Severus snape'},

    {nombre: 'ENCATAMIENTOS',
    comision: 206,
    profesor:'Filius Flitwick'},

    {
      nombre: 'DEFENSA A. OSCURAS',
      comision: 207,
      profesor:'Alastor Moody'
    },
    {
      nombre: 'HERBOLARIA',
      comision: 208,
      profesor:'Pomona Sprout'
    },


    
    
   

    
    
  ];

  constructor() { }

  ngOnInit(): void {
  
  }

  manejarevento () {
    alert ("hice click")

  }

}

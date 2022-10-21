import { Component, OnInit } from '@angular/core';

import { MatTableDataSource } from '@angular/material/table';
import { ListaAlumnos } from './personas'

@Component({
  selector: 'app-abmalumnos',
  templateUrl: './abmalumnos.component.html',
  styleUrls: ['./abmalumnos.component.css']
})
export class AbmalumnosComponent implements OnInit {

  public dataIncial = ListaAlumnos
  public ELEMENT_DATA = new MatTableDataSource 
  displayedColumns: string[] = ['nombre', 'apellido', 'nota', 'estado', 'accion'];

  ngOnInit(): void {
    this.ELEMENT_DATA.data = this.dataIncial
  }

  borrar (id: Number) {
    let position = this.dataIncial.findIndex(persona => persona.id === id)
    this.dataIncial.splice(position, 1)

  }
}



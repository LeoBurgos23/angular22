import { Component, OnInit } from '@angular/core';
import { MatTableDataSource } from '@angular/material/table';
import { ListaAlumnos } from './personas';

@Component({
  selector: 'app-abmalumnos',
  templateUrl: './abmalumnos.component.html',
  styleUrls: ['./abmalumnos.component.css']
})
export class AbmalumnosComponent implements OnInit {
  
 public dataIncial= ListaAlumnos
 public ELEMENT_DATA = new MatTableDataSource 
  displayedColumns: string[] = ['nombre', 'Apellido', 'nota', 'estado','accion'];

  constructor() { }

  ngOnInit(): void {
    this.ELEMENT_DATA.data = this.dataIncial
  }

}
 
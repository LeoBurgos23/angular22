import { Component, OnInit } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { MatTableDataSource } from '@angular/material/table';
import { DialogComponent } from '../dialog/dialog.component';
import { Alumnos, ListaAlumnos } from './personas'

@Component({
  selector: 'app-abmalumnos',
  templateUrl: './abmalumnos.component.html',
  styleUrls: ['./abmalumnos.component.css']
})
export class AbmalumnosComponent implements OnInit {

  public dataIncial = ListaAlumnos
  public ELEMENT_DATA = new MatTableDataSource 
  displayedColumns: string[] = ['nombre', 'apellido', 'nota', 'estado', 'accion'];

constructor(
  private dialog: MatDialog
  ) {}


  ngOnInit(): void {
    this.ELEMENT_DATA.data = this.dataIncial
  }

  Eliminar (id: Number) {
    let position = this.dataIncial.findIndex(persona => persona.id === id)
    this.dataIncial.splice(position, 1)

  }

  filtrar (event:Event) {
    const valor= (event.target as HTMLInputElement).value
    this.ELEMENT_DATA.filter= valor.trim().toLocaleLowerCase()
  }

  editar () {
    this.dialog.open(DialogComponent , {
      width: '350px'
    })
  }
}



import { Component, OnInit } from '@angular/core';
import { Cliente } from './cliente';

@Component({
  selector: 'app-clientes',
  templateUrl: './clientes.component.html',
})
export class ClientesComponent implements OnInit {

  clientes: Cliente[] = [
    { id: 1, nombre: 'Carlos', apellido: 'Gomez', email: 'pppp@gmail.com', createAt: '2022-05-25' },
    { id: 1, nombre: 'Jose', apellido: 'Dussan', email: 'jjjj@gmail.com', createAt: '2022-05-25' },
    { id: 1, nombre: 'Maria', apellido: 'Rojas', email: 'rrr@gmail.com', createAt: '2022-05-25' },
    { id: 1, nombre: 'Sara', apellido: 'Fernandez', email: 'SSSS@gmail.com', createAt: '2022-05-25' }
  ]

  constructor() { }

  ngOnInit(): void {
  }

}

import { Component, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'app-listado',
  templateUrl: './listado.component.html',
  styleUrls: ['./listado.component.css']
})
export class ListadoComponent {

  @Output() seleccionarEvent = new EventEmitter<number>();

  articulos: any[] = [];

  // Agrega el articulo a la lista
  agregar(articulo: any): void {
    this.articulos.push(articulo);
  }

  // Busca el indice del articulo por el codigo y lo borra de la lista
  borrar(codigo: number): void {
    const index = this.articulos.findIndex(articulo => articulo.codigo == codigo);
    this.articulos.splice(index, 1);
  }

  // Emite un evento con el codigo del articulo seleccionado
  seleccionar(codigo: number): void {
    this.seleccionarEvent.emit(codigo);
  }

  // Busca el indice del articulo por el codigo y modifica sus datos
  modificar(newArticulo: any): void {
    const index = this.articulos.findIndex(articulo => articulo.codigo == newArticulo.codigo);

    if (index != -1) {
      this.articulos[index].descripcion = newArticulo.descripcion;
      this.articulos[index].precio = newArticulo.precio;
    }
  }
}
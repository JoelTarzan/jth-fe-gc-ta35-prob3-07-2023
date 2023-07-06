import { Component, ViewChild } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  
  @ViewChild('listado') listado: any;

  codigo: number = 0;
  descripcion: string = '';
  precio: number = 0;

  // Genera un nuevo articulo y llama a la funcion del componente correspondiente
  nuevoArticulo(): void {
    let articulo = {
      "codigo": this.codigo,
      "descripcion": this.descripcion,
      "precio": this.precio
    }

    this.listado.agregar(articulo);
  }

  // Recoge el evento del componente hijo y actualiza el código
  seleccionarCodigo($event: number): void {
    this.codigo = $event;
  }

  // Recoge los nuevos datos del objeto y llama a la funcion del componente correspondiente
  modificarArticulo(): void {

    let articuloModificado = {
      "codigo": this.codigo,
      "descripcion": this.descripcion,
      "precio": this.precio
    }

    this.listado.modificar(articuloModificado);
  }
}

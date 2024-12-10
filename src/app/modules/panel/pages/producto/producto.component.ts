import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { Producto } from '../../../../model/producto';
import { ProductoService } from '../../../../service/producto.service';

@Component({
  selector: 'app-producto',
  standalone: true,
  imports: [CommonModule,FormsModule],
  templateUrl: './producto.component.html',
  styleUrl: './producto.component.css'
})
export class ProductoComponent {
  isModalOpen = false;

  openModal() {
    this.isModalOpen = true;
  }

  closeModal() {
    this.isModalOpen = false;
  }
  productos: Producto[] = [];
  constructor(private productoService: ProductoService) {}
  ngOnInit(): void {
    this.cargarProductos();
  }
  cargarProductos(): void {
    this.productoService.getAllProductos().subscribe(
      (productos: Producto[]) => {
        this.productos = productos;
      },
      (error) => {
        console.error('Error al cargar productos', error);
      }
    );
  }
  
}
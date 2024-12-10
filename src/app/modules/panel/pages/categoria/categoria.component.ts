import { Component } from '@angular/core';
import { Categoria } from '../../../../model/categoria';
import { CategoriaService } from '../../../../service/categoria.service';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-categoria',
  standalone: true,
  imports: [CommonModule,FormsModule],
  templateUrl: './categoria.component.html',
  styleUrl: './categoria.component.css'
})
export class CategoriaComponent {
  isModalOpen = false;

  openModal() {
    this.isModalOpen = true;
  }

  closeModal() {
    this.isModalOpen = false;
  }

  confirmAction() {
    // Acción de confirmación
    console.log('Acción confirmada');
    this.closeModal();
  }

  category: Categoria[] = [];
  catego:Categoria =new Categoria();
  constructor(private categoriaService: CategoriaService) { }
  ngOnInit(): void {
    this.loadCategories();
  }
  loadCategories(): void {
    this.categoriaService.getAllCategories().subscribe(
      (data) => {
        console.log('Datos obtenidos:', data); // Verifica lo que estás recibiendo
        this.category = data;
      },
      (error) => {
        console.error('Error fetching categories:', error);
      }
    );
  }
  /* agregar */
  guardarCategoria() {
    this.categoriaService.createCategory(this.catego).subscribe(
      (dato) => {
        console.log(dato);  // Muestra los datos recibidos en la consola
        this.loadCategories();  // Vuelve a cargar las categorías para actualizar la tabla
        this.closeModal();  // Cierra el modal
      },
      (error) => console.log(error)
    );
  }
  
  onSubmit(){
    this.guardarCategoria();
  }
  /* */
  deleteCategory(id: number): void {
    this.categoriaService.deleteCategory(id).subscribe(
      () => {
        console.log('Categoría eliminada');
        this.loadCategories();  // Recargar la lista de categorías
      },
      (error) => {
        console.error('Error al eliminar la categoría', error);
      }
    );
  }
  

}

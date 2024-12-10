import { Categoria } from "./categoria";


export interface Producto {
  id: number;
  name: string;
  categoria: Categoria;  // Relación con Categoria
}

import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { MatTableDataSource } from '@angular/material/table';
import { MatSnackBar } from '@angular/material/snack-bar';
import { ProductService } from '../../../../services/product.service';
import { Product } from '../../../../models/product';


@Component({
  selector: 'app-products-list',
  templateUrl: './products-list.html',
  styleUrls: ['./products-list.scss']
})
export class ProductsList implements OnInit {

  displayedColumns: string[] = ['id', 'name', 'price', 'stockQuantity', 'active', 'actions'];
  dataSource = new MatTableDataSource<Product>();

  loading = false;
  error?: string;

  constructor(
    private productService: ProductService,
    private router: Router,
    private snack: MatSnackBar
  ) {}

  ngOnInit(): void {
    this.loadProducts();
  }

  /** Carrega produtos da API */
  loadProducts(): void {
    this.loading = true;

    this.productService.getAll().subscribe({
      next: (products) => {
        this.dataSource.data = products;
        this.loading = false;
      },
      error: () => {
        this.error = 'Erro ao carregar produtos.';
        this.snack.open('Erro ao carregar produtos', 'Fechar', { duration: 3000 });
        this.loading = false;
      }
    });
  }

  /** Navega para a página de criação */
  newProduct(): void {
    this.router.navigate(['/products/new']);
  }

  /** Navega para edição */
  editProduct(product: Product): void {
    if (!product.id) return;
    this.router.navigate(['/products', product.id]);
  }

  /** Exclui um produto */
  deleteProduct(product: Product): void {
    if (!product.id) return;

    const confirmDelete = confirm(`Tem certeza que deseja excluir "${product.name}"?`);

    if (!confirmDelete) return;

    this.productService.delete(product.id).subscribe({
      next: () => {
        this.snack.open('Produto excluído com sucesso.', 'Fechar', { duration: 3000 });
        this.loadProducts();
      },
      error: () => {
        this.snack.open('Erro ao excluir produto.', 'Fechar', { duration: 3000 });
      }
    });
  }
}

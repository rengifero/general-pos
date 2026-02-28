import { CommonModule } from '@angular/common';
import { afterRenderEffect, Component, inject } from '@angular/core';
import { ProductStore } from '../stores/product.store';

@Component({
  selector: 'app-products',
  imports: [CommonModule],
  templateUrl: './products.html',
  styleUrl: './products.scss',
})
export class Products {


  productStore = inject(ProductStore)


  constructor(){
afterRenderEffect(()=>{
console.log("entrando por aqui")
this.productStore.loadProducts();

})


  }
}

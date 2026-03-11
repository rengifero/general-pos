
import { afterNextRender, Component, inject } from '@angular/core';

import { ProductStore } from '../stores/product.store';
import {  debounceTime, distinctUntilChanged, Subject } from 'rxjs';
import { FormsModule } from '@angular/forms';
import { ProductCardCompoment } from '../components/product-card/product-card';
import untilDestroyed from '../utils/untilDestroyed';
import { CartStore } from '../stores/cart.store';


@Component({
  selector: 'app-products',
  imports: [ProductCardCompoment, FormsModule],
  templateUrl: './products.html',
  styleUrl: './products.scss',
})
export class Products {
 searchTerm = '';
  productStore = inject(ProductStore);
  searchSubject = new Subject<string>();
    destroyed = untilDestroyed();
cartStore = inject(CartStore)

   constructor() {
    this.productStore.loadProducts();
    afterNextRender(() => {
      this.searchSubject
        .pipe(debounceTime(500), distinctUntilChanged(), this.destroyed())
        .subscribe((term) => {
          console.log({ term });
          this.productStore.searchProducts(term);
        });
    });
  }

  onSearch(term: string) {
    console.log("term")
    this.searchSubject.next(term);
  }

  
}
 
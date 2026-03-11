import { Component, inject } from '@angular/core';
import { CartStore } from '../stores/cart.store';
import { CommonModule, DecimalPipe } from '@angular/common';
import { RouterLink } from '@angular/router';

@Component({
  selector: 'app-cart',
    standalone: true,
  imports: [CommonModule ,RouterLink,],
   providers: [DecimalPipe] ,
  templateUrl: './cart.html',
  styleUrl: './cart.scss',
})
export class Cart {
  
  
  cartStore = inject(CartStore);
  myNumber: number;
  formattedValue: string;
  decimalPipe =inject( DecimalPipe);
constructor(){
 this.myNumber =0
 this.formattedValue=''

}


 transformDecimal(num:number) {
    return this.decimalPipe.transform(num, '1.2-2');
  }
  updateQuantity(productId: string, event: Event) {
    const target = event.target as HTMLInputElement;
    const quantity = parseInt(target.value);
    if (quantity > 0) {
      this.cartStore.updateQuantity(productId, quantity);
    }
  }
}
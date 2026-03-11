import { Component, inject } from '@angular/core';
import { CartStore } from '../stores/cart.store';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-ckeckout',
  imports: [CommonModule],
  templateUrl: './ckeckout.html',
  styleUrl: './ckeckout.scss',
})
export class Ckeckout {
  cartStore = inject(CartStore);
  //stripeService = inject(StripeService);

  checkout() {
    //this.stripeService.createCheckoutSession().subscribe(({ url }) => {
     // location.href = url;
    //});
  }
}
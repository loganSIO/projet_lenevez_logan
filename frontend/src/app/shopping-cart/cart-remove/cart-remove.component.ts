import { Component, Input } from '@angular/core';
import { Store } from '@ngxs/store';
import { Product } from '../../models/products';
import { RemoveFromCart } from '../shopping-cart.actions';

@Component({
  selector: 'app-shopping-cart-remove',
  templateUrl: './cart-remove.component.html',
})
export class ShoppingCartRemoveComponent {
  @Input() declare product: Product;

  constructor(private store: Store) {}

  removeFromCart() {
    this.store.dispatch(new RemoveFromCart(this.product));
  }
}
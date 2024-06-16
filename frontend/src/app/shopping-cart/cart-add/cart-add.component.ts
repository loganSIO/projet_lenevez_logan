import { Component, Input } from '@angular/core';
import { Store } from '@ngxs/store';
import { AddToCart } from '../shopping-cart.actions';
import { Product } from '../../models/products';

@Component({
  selector: 'app-shopping-cart-add',
  templateUrl: './cart-add.component.html',
})
export class ShoppingCartAddComponent {
  @Input() declare product: Product;

  constructor(private store: Store) {}

  addToCart() {
    this.store.dispatch(new AddToCart(this.product));
  }
}
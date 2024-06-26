import { Product } from '../models/products';

export class AddToCart {
  static readonly type = '[ShoppingCart] AddToCart';

  constructor(public payload: Product) {}
}

export class RemoveFromCart {
  static readonly type = '[ShoppingCart] RemoveFromCart';

  constructor(public payload: Product) {}
}
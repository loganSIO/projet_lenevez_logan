import { Product } from "../../models/products";

export type ShoppingCartItem = {
  product: Product;
  quantity: number;
};
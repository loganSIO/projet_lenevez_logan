import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { NgxsModule } from '@ngxs/store';
import { ShoppingCartAddComponent } from './cart-add/cart-add.component';
import { ShoppingCartLinkComponent } from './cart-link/shopping-cart-link.component';
import { ShoppingCartRemoveComponent } from './cart-remove/cart-remove.component';
import { ShoppingCartComponent } from './cart/cart.component';
import { ShoppingCartRoutingModule } from './shopping-cart-routing.module';
import { ShoppingCartState } from './shopping-cart.state';

@NgModule({
  declarations: [
    ShoppingCartComponent,
    ShoppingCartLinkComponent,
    ShoppingCartAddComponent,
    ShoppingCartRemoveComponent,
  ],
  imports: [
    CommonModule,
    ShoppingCartRoutingModule,
    NgxsModule.forFeature([ShoppingCartState]),
  ],
  exports: [
    ShoppingCartComponent,
    ShoppingCartLinkComponent,
    ShoppingCartAddComponent,
  ],
})
export class ShoppingCartModule {}
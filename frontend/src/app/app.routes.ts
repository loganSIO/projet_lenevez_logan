import { Routes } from '@angular/router';
import { FormComponent } from './form/form.component';
import { DataFormComponent } from './data-form/data-form.component';
import { BodyComponent } from './body/body.component';
import { ProductsComponent } from './products/products.component';
import { CardDisplayComponent } from './card-management/card-display/card-display.component';

export const routes: Routes = [
  { path: '', component: BodyComponent},
  { path: 'form', component: FormComponent },
  { path: 'data-form', component: DataFormComponent },
  { path: 'products', component: ProductsComponent },
  { path: 'card', component: CardDisplayComponent},
  { path: 'cart', loadChildren: () => import('./shopping-cart/shopping-cart.module').then(m => m.ShoppingCartModule)},
  { path: 'login', loadComponent: () => import('./login/login.component').then(m => m.LoginComponent)}
];

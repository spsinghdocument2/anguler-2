import { RouterModule, Routes } from '@angular/router';
import {AddProdComponent} from './product/addproduct.component';
import {ProdComponent} from './product/product.component'



const app_routes: Routes = [
  { path: '',  pathMatch:'full', redirectTo: '/home' },
  { path: 'home',  component: ProdComponent },
  { path: 'products',  component: ProdComponent },
  { path: 'addproduct', component: AddProdComponent }
];

export const app_routing = RouterModule.forRoot(app_routes);
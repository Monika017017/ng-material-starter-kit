import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';
import { ProductListComponent } from './components/product-list/product-list.component';
import { CategoriesComponent } from './components/categories/categories.component';
import { ProductListComponentModule } from './components/product-list/product-list.component-module';
import { ProductServiceModule } from './services/product.service-module';
import { CategoriesComponentModule } from './components/categories/categories.component-module';
import { CategoriesServiceModule } from './services/categories.service-module';

@NgModule({
  imports: [RouterModule.forRoot([{
    path: 'products', component: ProductListComponent },
    { path: 'categories', component: CategoriesComponent }]),
    ProductListComponentModule, ProductServiceModule, CategoriesComponentModule, CategoriesServiceModule],
  exports: [RouterModule]
})
export class AppRoutingModule { }

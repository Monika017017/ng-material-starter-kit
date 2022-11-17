import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';
import { ProductListComponent } from './components/product-list/product-list.component';
import { CategoriesComponent } from './components/categories/categories.component';
import { CryptoChipsComponent } from './components/crypto-chips/crypto-chips.component';
import { ProductListComponentModule } from './components/product-list/product-list.component-module';
import { ProductServiceModule } from './services/product.service-module';
import { CategoriesComponentModule } from './components/categories/categories.component-module';
import { CategoriesServiceModule } from './services/categories.service-module';
import { CryptoChipsComponentModule } from './components/crypto-chips/crypto-chips.component-module';
import { CryptoChipsServiceModule } from './services/crypto-chips.service-module';

@NgModule({
  imports: [RouterModule.forRoot(
    [{ path: 'products', component: ProductListComponent },
      { path: 'categories', component: CategoriesComponent },
      { path: 'crypto', component: CryptoChipsComponent }]),
    ProductListComponentModule,
    ProductServiceModule,
    CategoriesComponentModule,
    CategoriesServiceModule,
    CryptoChipsComponentModule,
    CryptoChipsServiceModule],
  exports: [RouterModule]
})
export class AppRoutingModule { }

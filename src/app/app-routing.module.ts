import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';
import { EmployeeFormComponent } from './components/employee-form/employee-form.component';
import { LoginFormComponent } from './components/login-form/login-form.component';
import { ProductFormComponent } from './components/product-form/product-form.component';
import { EmployeeFormComponentModule } from './components/employee-form/employee-form.component-module';
import { EmployeeServiceModule } from './services/employee.service-module';
import { LoginFormComponentModule } from './components/login-form/login-form.component-module';
import { LoginServiceModule } from './services/login.service-module';
import { ProductFormComponentModule } from './components/product-form/product-form.component-module';
import { ProductServiceModule } from './services/product.service-module';
import { CategoriesServiceModule } from './services/categories.service-module';

@NgModule({
  imports: [RouterModule.forRoot([{
    path: 'create-employee', component: EmployeeFormComponent }, {
    path: 'login', component: LoginFormComponent }, {
    path: 'create-product', component: ProductFormComponent }]),
    EmployeeFormComponentModule,
    EmployeeServiceModule,
    LoginFormComponentModule,
    LoginServiceModule,
    ProductFormComponentModule,
    ProductServiceModule,
    CategoriesServiceModule],
  exports: [RouterModule]
})
export class AppRoutingModule { }

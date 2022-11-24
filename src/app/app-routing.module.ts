import {NgModule} from '@angular/core';
import {RouterModule, Routes} from '@angular/router';
import {EmployeeListComponent} from './components/employee-list/employee-list.component';
import {EmployeeFormComponent} from './components/employee-form/employee-form.component';
import {HomeComponent} from './components/home/home.component';
import {ProductTableComponent} from './components/product-table/product-table.component';
import {EmployeeListComponentModule} from './components/employee-list/employee-list.component-module';
import {EmployeeListServiceModule} from './services/employee-list.service-module';
import {EmployeeFormComponentModule} from './components/employee-form/employee-form.component-module';
import {EmployeeServiceModule} from './services/employee.service-module';
import {HomeComponentModule} from './components/home/home.component-module';
import {ProductTableComponentModule} from './components/product-table/product-table.component-module';
import {ProductTableServiceModule} from './services/product-table.service-module';

const routes: Routes = [{path: 'employee-list', component: EmployeeListComponent}, {
  path: 'create-employee',
  component: EmployeeFormComponent
}, {path: '', component: HomeComponent}, {
  path: 'product-table',
  component: ProductTableComponent
}, {path: 'product-search', component: ProductTableComponent}];

@NgModule({
  imports: [RouterModule.forRoot(routes), EmployeeListComponentModule, EmployeeListServiceModule, EmployeeFormComponentModule, EmployeeServiceModule, HomeComponentModule, ProductTableComponentModule, ProductTableServiceModule],
  exports: [RouterModule]
})
export class AppRoutingModule {
}

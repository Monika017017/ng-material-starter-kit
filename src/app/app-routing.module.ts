import {NgModule} from '@angular/core';
import {RouterModule, Routes} from '@angular/router';
import {EmployeeListComponent} from './components/employee-list/employee-list.component';
import {EmployeeFormComponent} from './components/employee-form/employee-form.component';
import {HomeComponent} from './components/home/home.component';
import {EmployeeListComponentModule} from './components/employee-list/employee-list.component-module';
import {EmployeeListServiceModule} from './services/employee-list.service-module';
import {EmployeeFormComponentModule} from './components/employee-form/employee-form.component-module';
import {EmployeeServiceModule} from './services/employee.service-module';
import {HomeComponentModule} from './components/home/home.component-module';

const routes: Routes = [{path: 'employee-list', component: EmployeeListComponent}, {
  path: 'create-employee',
  component: EmployeeFormComponent
}, {path: '', component: HomeComponent}];

@NgModule({
  imports: [RouterModule.forRoot(routes), EmployeeListComponentModule, EmployeeListServiceModule, EmployeeFormComponentModule, EmployeeServiceModule, HomeComponentModule],
  exports: [RouterModule]
})
export class AppRoutingModule {
}

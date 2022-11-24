import { NgModule } from '@angular/core';
import { EmployeeDetailsComponent } from './employee-details.component';
import {AsyncPipe} from "@angular/common";

@NgModule({
    imports: [
        AsyncPipe
    ],
  declarations: [EmployeeDetailsComponent],
  providers: [],
  exports: [EmployeeDetailsComponent]
})
export class EmployeeDetailsComponentModule {
}

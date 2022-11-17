import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MatCardModule } from '@angular/material/card';
import { MatCheckboxModule } from '@angular/material/checkbox';
import { MatListModule } from '@angular/material/list';
import { CheckboxComponent } from './checkbox.component';

@NgModule({
  imports: [MatCardModule, MatCheckboxModule, CommonModule, MatListModule],
  declarations: [CheckboxComponent],
  providers: [],
  exports: [CheckboxComponent]
})
export class CheckboxComponentModule {
}

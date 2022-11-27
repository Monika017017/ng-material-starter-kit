import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MatCardModule } from '@angular/material/card';
import { GenderUserComponent } from './gender-user.component';

@NgModule({
  imports: [MatCardModule, CommonModule],
  declarations: [GenderUserComponent],
  providers: [],
  exports: [GenderUserComponent]
})
export class GenderUserComponentModule {
}

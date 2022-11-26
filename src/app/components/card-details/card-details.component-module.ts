import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MatCardModule } from '@angular/material/card';
import { CardDetailsComponent } from './card-details.component';

@NgModule({
  imports: [MatCardModule, CommonModule],
  declarations: [CardDetailsComponent],
  providers: [],
  exports: [CardDetailsComponent]
})
export class CardDetailsComponentModule {
}

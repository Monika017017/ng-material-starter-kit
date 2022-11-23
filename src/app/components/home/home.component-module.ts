import { NgModule } from '@angular/core';
import { ReactiveFormsModule } from '@angular/forms';
import { HomeComponent } from './home.component';
import {RouterLinkWithHref} from "@angular/router";

@NgModule({
  imports: [RouterLinkWithHref, ReactiveFormsModule, RouterLinkWithHref],
  declarations: [HomeComponent],
  providers: [],
  exports: [HomeComponent]
})
export class HomeComponentModule {
}

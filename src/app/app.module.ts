import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { LabeledInputComponent } from './labeled-input/labeled-input.component';
import { PetDashboardComponent } from './pet-dashboard/pet-dashboard.component';
import { AdoptButtonComponent } from './adopt-button/adopt-button.component';

@NgModule({
  declarations: [
    AppComponent,
    LabeledInputComponent,
    PetDashboardComponent,
    AdoptButtonComponent,
  ],
  imports: [
    BrowserModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }

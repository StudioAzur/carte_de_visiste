import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { ListeEmployesComponent } from './liste-employes/liste-employes.component';

@NgModule({
  declarations: [
    AppComponent,
    ListeEmployesComponent
  ],
  imports: [
    BrowserModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }

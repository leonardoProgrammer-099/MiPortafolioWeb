import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { NavegadorComponent } from './navegador/navegador.component';
import { SobremiComponent } from './sobremi/sobremi.component';
import { MiexperienceComponent } from './miexperience/miexperience.component';

@NgModule({
  declarations: [
    AppComponent,
    NavegadorComponent,
    SobremiComponent,
    MiexperienceComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }

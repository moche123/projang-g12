import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { MainComponent } from './main/main.component';
import { AboutComponent } from './about/about.component';
import { ChildComponent } from './main/child/child.component';
import { SortAgePipe } from './pipes/sort-age.pipe';
import { HttpClientModule } from '@angular/common/http';

@NgModule({
  declarations: [ //* COMPONENTS Y PIPES
    AppComponent, MainComponent, AboutComponent, ChildComponent, SortAgePipe
  ],
  imports: [ //* MODULES
    BrowserModule,
    AppRoutingModule,
    HttpClientModule
  ],
  providers: [],//* INYECCIÓN DE DEPENDENCIAS (Servicios)
  bootstrap: [AppComponent] //* MOSTRAR
})
export class AppModule { }

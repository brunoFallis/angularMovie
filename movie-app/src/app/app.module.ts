import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { MovieRoutingModule } from './movie-routing.module';
import { FormsModule } from '@angular/forms';

import { AppComponent } from './app.component';
import { MovieDetalheComponent } from './movie-detalhe/movie-detalhe.component';
import { MovieListaComponent } from './movie-lista/movie-lista.component';
import { HttpClientModule } from '@angular/common/http';
import { fromEventPattern } from 'rxjs';

@NgModule({
  declarations: [
    AppComponent,
    MovieDetalheComponent,
    MovieListaComponent
  ],
  imports: [
    BrowserModule,
    MovieRoutingModule, 
    HttpClientModule,
    FormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }

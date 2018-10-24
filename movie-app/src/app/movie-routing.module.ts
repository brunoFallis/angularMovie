import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { MovieDetalheComponent } from './movie-detalhe/movie-detalhe.component';
import { MovieListaComponent } from './movie-lista/movie-lista.component';
import { MovieSearchComponent } from './movie-search/movie-search.component';

const routes: Routes = [
  {path: 'movieDetalhe/:id', component: MovieDetalheComponent}, 
  {path: 'movieSearch/:title', component: MovieSearchComponent},
  {path: 'movieList', component: MovieListaComponent},
  {path: '', redirectTo: 'movieList', pathMatch: 'full' }
];

@NgModule({
  imports: [
    RouterModule.forRoot(routes)
  ],
  exports: [
    RouterModule
  ],
  declarations: []
})
export class MovieRoutingModule { }

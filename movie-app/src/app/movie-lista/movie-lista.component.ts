import { Component, OnInit } from '@angular/core';
import { Movie } from './movie';
import { MovieService } from '../movie.service';

@Component({
  selector: 'app-movie-lista',
  templateUrl: './movie-lista.component.html',
  styleUrls: ['./movie-lista.component.css']
})
export class MovieListaComponent implements OnInit {

  movies: Array<Movie>;
  movie: Movie;

  constructor(private service: MovieService) { 
  }

  ngOnInit() {
    this.service.returnMovies().subscribe(movies => this.movies = movies);
  }

}
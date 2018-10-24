import { Component, OnInit } from '@angular/core';
import { MovieService } from '../movie.service';
import { Movie } from '../movie-lista/movie';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-movie-search',
  templateUrl: './movie-search.component.html',
  styleUrls: ['./movie-search.component.css']
})
export class MovieSearchComponent implements OnInit {

  movies: Array<Movie>;
  title: string;

  constructor(private service: MovieService,
              private route: ActivatedRoute) { 
  }

  ngOnInit() {
    this.title = this.route.snapshot.paramMap.get('title');
    this.service.returnMoviesByName(this.title).subscribe(movies => this.movies = movies);
  }

  buscarApi(){
    //VERIFICAR A ATRIBUIÇÃO DO MOVIES
    this.service.returnMovieAPI(this.title).subscribe(movies => this.movies.movies);
  }

}

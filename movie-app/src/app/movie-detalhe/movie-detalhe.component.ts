import { Component, OnInit } from '@angular/core';
import { Movie } from '../movie-lista/movie';
import { MovieService } from '../movie.service';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-movie-detalhe',
  templateUrl: './movie-detalhe.component.html',
  styleUrls: ['./movie-detalhe.component.css']
})
export class MovieDetalheComponent implements OnInit {

  movie: Movie;
  id: string;

  constructor(private route: ActivatedRoute,
              private service: MovieService) { }

  ngOnInit() {
    this.id = this.route.snapshot.paramMap.get('id');
    this.service.returnMovie(this.id).subscribe(movie => this.movie = movie);
  }

}

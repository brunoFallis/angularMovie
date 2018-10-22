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
  title: string;

  constructor(private route: ActivatedRoute,
              private service: MovieService) { }

  ngOnInit() {
    this.title = this.route.snapshot.paramMap.get('Title');
    this.service.returnMovie(this.title).subscribe(movie => this.movie = movie);
  }

}

import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { HttpClient } from '@angular/common/http';
import { Movie } from './movie-lista/movie';

@Injectable({
  providedIn: 'root'
})
export class MovieService {

  movie: Movie;

  constructor(private http: HttpClient) { }

  returnMovies(): Observable<Movie[]> {
    return this.http.get<Movie[]>('http://localhost:8080/movie/');
  }

  returnMovie(title: string): Observable<Movie> {
    return this.http.get<Movie>('http://localhost:8080/movie/' + title);
  }

}

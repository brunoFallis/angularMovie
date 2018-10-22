import { Component } from '@angular/core';
import { Movie } from './movie-lista/movie';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {

  title = 'movie-app';
  t: string;

}

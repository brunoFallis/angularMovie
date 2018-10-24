export class Movie {
    Title: string;
    Year: string;
    imdbID: string;
    Type: string;
    Poster: string;
    movieDetailDTO: MovieDetail = new MovieDetail();
}

class MovieDetail {
    imdbid: string;
    released: string;
    genre: string;
    director: string;
    plot: string;
}

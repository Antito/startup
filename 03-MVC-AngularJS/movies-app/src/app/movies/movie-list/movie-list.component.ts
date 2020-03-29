import { Component, OnInit } from '@angular/core';

import { MovieService } from 'src/app/movie.service';
import { Movie } from 'src/app/movie';

@Component({
  selector: 'app-movie-list',
  templateUrl: './movie-list.component.html',
  styleUrls: ['./movie-list.component.css']
})
export class MovieListComponent implements OnInit {

  movies : Movie[]

  constructor(private movieService : MovieService) { }

  ngOnInit() : void {
    this.getMovies();
  }

  getMovies(): void {
    this.movieService.getMovies()
    .subscribe(movies => this.movies = movies);
  }

}

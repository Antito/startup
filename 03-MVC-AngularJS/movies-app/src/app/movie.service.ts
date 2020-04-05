import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Movie } from './movie';
import { Observable, of } from 'rxjs';
@Injectable({
  providedIn: 'root'
})
export class MovieService {

  private moviesUrl = 'api/movies';

  constructor(private http: HttpClient) { }

  getMovies (): Observable<Movie[]> {
    return this.http.get<Movie[]>(this.moviesUrl)
  }
}

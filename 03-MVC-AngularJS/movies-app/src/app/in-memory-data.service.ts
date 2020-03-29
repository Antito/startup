import { InMemoryDbService } from 'angular-in-memory-web-api';
import { Movie } from './movie';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class InMemoryDataService implements InMemoryDbService{
  createDb() {
    const movies = [
      { id: 1, title: '1917', year: 2019 ,duration: 120},
      { id: 2, title: 'Joker', year: 2019 ,duration: 122},
      { id: 3, title: 'Historia de un matrimonio', year: 2019 ,duration: 137},
      { id: 4, title: 'Roma', year: 2018 ,duration: 135},
      { id: 5, title: 'Mujercitas', year: 2019 ,duration: 135},
    ];
    return {movies};
  }
  genId(movies: Movie[]): number {
    return movies.length > 0 ? Math.max(...movies.map(movie => movie.id)) + 1 : 1;
  }
 
}

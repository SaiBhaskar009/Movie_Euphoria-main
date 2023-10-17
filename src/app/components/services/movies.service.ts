import { Injectable } from '@angular/core';
import {HttpClient} from '@angular/common/http';
import { MovieModel } from '../models/movie-model';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class MoviesService {

  private movies_detail_URL = 'http://127.0.0.1:5000/movies';

  constructor(private http: HttpClient) { }

  get_all_movies(): Observable<MovieModel[]> {
    const url = `${this.movies_detail_URL}/getallmovies`;
    return this.http.get<MovieModel[]>(url);
  }

  add_movie(movie: MovieModel): Observable<MovieModel>{
    const url = `${this.movies_detail_URL}/add`;
    return this.http.post<MovieModel>(url, movie);
  }

  delete_movie(id:number): Observable<number>{
    const url = `${this.movies_detail_URL}/deletebyid/${id}`;
    return this.http.delete<number>(url);
  }

  get_movie(Name: string): Observable<MovieModel>{
    const url = `${this.movies_detail_URL}/getmovie/${Name}`;
    return this.http.get<MovieModel>(url);
  }

  get_by_genre(Genre: string): Observable<MovieModel>{
    const url = `${this.movies_detail_URL}/getbygenre/${Genre}`;
    return this.http.get<MovieModel>(url);
  }

  get_movie_by_OTT(OTT: string): Observable<MovieModel> {
    const url = `${this.movies_detail_URL}/getbyOTT/${OTT}`;
    return this.http.get<MovieModel>(url);
  }

  delete_all(): Observable<MovieModel[]> {
    const url = `${this.movies_detail_URL}/deleteallmovies`;
    return this.http.delete<MovieModel[]>(url);
  }

  
}

import { MovieModel } from './../models/movie-model';
import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { MoviesService } from '../services/movies.service';
@Component({
  selector: 'app-movies',
  templateUrl: './movies.component.html',
  styleUrls: ['./movies.component.css']
})
export class MoviesComponent implements OnInit {

  movies : MovieModel[] = [];
  movie: MovieModel = {};
  

  constructor(private urlservice:MoviesService, public router: Router){}

  ngOnInit(): void {
    this.loadmovies();
    
  }

  loadmovies(): void {
    this.urlservice.get_all_movies().subscribe(
      (movies)=>{
            this.movies = movies;
            console.log(movies);
      }
    )
  }

  
  

  

}

import { Component, OnInit } from '@angular/core';
import { MoviesService } from '../services/movies.service';
import { MovieModel } from '../models/movie-model';
import { Router } from '@angular/router';

@Component({
  selector: 'app-movie-add',
  templateUrl: './movie-add.component.html',
  styleUrls: ['./movie-add.component.css']
})
export class MovieAddComponent implements OnInit {

  movie: MovieModel = {};

  constructor(private urlservice:MoviesService, private router:Router){}

    ngOnInit(): void {
      this.enter_movie();
    }

    enter_movie(): void {
      this.urlservice.add_movie(this.movie).subscribe(
        (movie)=>{
          this.movie = {};
          console.log(movie)
        }
      )
    }
}

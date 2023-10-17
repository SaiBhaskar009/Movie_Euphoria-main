import { Component, OnInit } from '@angular/core';
import { MovieModel } from '../../models/movie-model';
import { MoviesService } from '../../services/movies.service';
import { Router } from '@angular/router';


@Component({
  selector: 'app-action',
  templateUrl: './action.component.html',
  styleUrls: ['./action.component.css']
})
export class ActionComponent implements OnInit{

  ngOnInit(): void {
    
  }
}
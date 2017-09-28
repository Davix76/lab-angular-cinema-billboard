import { Component, OnInit } from '@angular/core';
import {MovieInformationService} from '../services/movie-information.service';


@Component({
  selector: 'app-my-home-component',
  templateUrl: './my-home-component.component.html',
  styleUrls: ['./my-home-component.component.css'],
  providers: [ MovieInformationService ]

})
export class MyHomeComponentComponent implements OnInit {

  movies : Array<Object>;
constructor(public MovieInformationService : MovieInformationService) { }



  ngOnInit() {
    this.movies = this.MovieInformationService.getMovies();
  }

}

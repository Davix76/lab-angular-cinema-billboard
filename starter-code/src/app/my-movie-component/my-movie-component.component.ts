import { Component, OnInit } from '@angular/core';
import {MovieInformationService} from '../services/movie-information.service';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-my-movie-component',
  templateUrl: './my-movie-component.component.html',
  styleUrls: ['./my-movie-component.component.css'],
 providers: [ MovieInformationService ]

})
export class MyMovieComponentComponent implements OnInit {
  contactId : number;
  movie: Array<Object>;
  constructor(public MovieInformationService : MovieInformationService, private route: ActivatedRoute) { }





  ngOnInit() {



  }

}

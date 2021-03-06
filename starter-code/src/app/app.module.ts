import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';
import {MovieInformationService} from './services/movie-information.service';
import { AppComponent } from './app.component';
import { RouterModule, Routes } from '@angular/router';
import { MyHomeComponentComponent } from './my-home-component/my-home-component.component';
import { MyMovieComponentComponent } from './my-movie-component/my-movie-component.component';


const routes: Routes = [
  { path: '', redirectTo:'home', pathMatch: 'full'},
  { path: 'home',  component:MyHomeComponentComponent },
  { path: 'movie/:id', component: MyMovieComponentComponent }
];

@NgModule({
  declarations: [
    AppComponent,
    MyHomeComponentComponent,
    MyMovieComponentComponent ,

  ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpModule,
    RouterModule.forRoot(routes)
  ],
  providers: [MovieInformationService],
  bootstrap: [AppComponent]
})
export class AppModule { }

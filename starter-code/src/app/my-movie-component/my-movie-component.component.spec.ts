import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import {MovieInformationService} from '../services/movie-information.service';
import { MyMovieComponentComponent } from './my-movie-component.component';

describe('MyMovieComponentComponent', () => {
  let component: MyMovieComponentComponent;
  let fixture: ComponentFixture<MyMovieComponentComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ MyMovieComponentComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(MyMovieComponentComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

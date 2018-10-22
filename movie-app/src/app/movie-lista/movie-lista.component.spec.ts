import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { MovieListaComponent } from './movie-lista.component';

describe('MovieListaComponent', () => {
  let component: MovieListaComponent;
  let fixture: ComponentFixture<MovieListaComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ MovieListaComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(MovieListaComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

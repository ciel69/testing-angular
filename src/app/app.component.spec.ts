import {TestBed} from '@angular/core/testing';
import {NO_ERRORS_SCHEMA} from '@angular/core';
import {of} from 'rxjs';

import {AppComponent} from './app.component';
import {Todo, TodosService} from './store/todos';

describe('AppComponent', () => {

  let service: TodosService;
  const todosServiceStub = {
    get: () => of([])
  };

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [
        AppComponent
      ],
      providers: [{provide: TodosService, useValue: todosServiceStub}],
      schemas: [NO_ERRORS_SCHEMA]
    }).compileComponents();
  });

  beforeEach(() => {
    service = TestBed.inject(TodosService);
  });

  it('should create the app', () => {
    const fixture = TestBed.createComponent(AppComponent);
    const app = fixture.componentInstance;
    expect(app).toBeTruthy();
  });

  it(`should have as title 'Todo list'`, () => {
    const fixture = TestBed.createComponent(AppComponent);
    const app = fixture.componentInstance;
    expect(app.title).toEqual('Todo list');
  });

  it('should called get', () => {
    const fixture = TestBed.createComponent(AppComponent);
    const openSpy = spyOn(service, 'get').and.returnValue(of([]));
    fixture.detectChanges();
    expect(openSpy).toHaveBeenCalled();
  });

  it('should render title', () => {
    const fixture = TestBed.createComponent(AppComponent);
    fixture.detectChanges();
    const compiled = fixture.nativeElement as HTMLElement;
    expect(compiled.querySelector('h1')?.textContent).toContain('Todo list');
  });

});

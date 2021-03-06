import {ComponentFixture, TestBed} from '@angular/core/testing';
import {NO_ERRORS_SCHEMA} from '@angular/core';
import {By} from '@angular/platform-browser';

import {TodosPageComponent} from './todos-page.component';
import {TodosQuery, TodosService} from '../../store/todos';

describe('TodosPageComponent', () => {
  let component: TodosPageComponent;
  let fixture: ComponentFixture<TodosPageComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      providers: [
        TodosService,
        TodosQuery
      ],
      declarations: [TodosPageComponent],
      schemas: [NO_ERRORS_SCHEMA]
    })
      .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(TodosPageComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  it('should display no todos message', () => {
    const noMessageElement = fixture.debugElement.query(By.css('.no-todos'));
    expect(noMessageElement).not.toBeNull();
  });

  it('should display two todos', () => {
    component.add('Test todo');
    component.add('Test todo 2');
    fixture.detectChanges();
    const todos = fixture.debugElement.queryAll(By.css('app-todo-item'));
    expect(todos.length).toEqual(2);
  });
});

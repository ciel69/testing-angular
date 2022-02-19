import {ComponentFixture, TestBed} from '@angular/core/testing';
import {By} from '@angular/platform-browser';
import {NO_ERRORS_SCHEMA} from '@angular/core';
import {first} from 'rxjs';

import {TodoItemComponent} from './todo-item.component';
import {Todo} from '../../store/todos';

describe('TodoItemComponent', () => {
  let component: TodoItemComponent;
  let fixture: ComponentFixture<TodoItemComponent>;

  const todo = {
    id: 1,
    completed: false,
    title: 'Test todo'
  };

  const completeTodo = {
    ...todo,
    completed: true,
  };

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [TodoItemComponent],
      schemas: [NO_ERRORS_SCHEMA]
    })
      .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(TodoItemComponent);
    component = fixture.componentInstance;
    component.todo = todo;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  it('should completed', () => {
    const title = fixture.debugElement.query(By.css('.todo-item__title'));
    component.todo = completeTodo;
    fixture.detectChanges();
    expect(title.classes['completed']).toBeTruthy();
  });

  it('should called complete', () => {
    component.complete.pipe(first()).subscribe((selectedTodo: Todo) => expect(selectedTodo).toEqual(completeTodo));
    component.handleComplete();
  });

  it('should called delete', () => {
    const btnDel = fixture.debugElement.query(By.css('i'));
    component.delete.pipe(first()).subscribe((id) => expect(id).toEqual(todo.id));
    btnDel.triggerEventHandler('click', null);
  });
});

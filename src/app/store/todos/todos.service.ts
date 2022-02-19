import {Injectable} from '@angular/core';
import {tap} from 'rxjs/operators';
import {Observable, of} from 'rxjs';

import {TodosStore} from './todos.store';
import {createTodo, Todo} from './todo.model';
import {ID} from "@datorama/akita";

@Injectable({providedIn: 'root'})
export class TodosService {

  constructor(private todosStore: TodosStore) {
  }

  get(): Observable<Todo[]> {
    return of<Todo[]>([
      {
        id: 1,
        title: 'test todo',
        completed: false
      },
      {
        id: 2,
        title: 'test todo 2',
        completed: false
      }
    ]).pipe(tap(entities => this.todosStore.set(entities)));
  }

  add(title: string): void {
    const todo = createTodo({ id: Math.random(), title });
    this.todosStore.add(todo);
  }

  complete({ id, completed }: Todo): void {
    this.todosStore.update(id, {
      completed
    });
  }

  delete(id: ID): void {
    this.todosStore.remove(id);
  }

}

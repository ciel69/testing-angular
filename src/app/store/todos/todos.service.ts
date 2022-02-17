import {HttpClient} from '@angular/common/http';
import {Injectable} from '@angular/core';
import {tap} from 'rxjs/operators';
import {Observable, of} from 'rxjs';

import {TodosStore} from './todos.store';
import {Todo} from './todo.model';

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
    ]).pipe(tap(entities => {
      console.log('get', entities);
      this.todosStore.set(entities)
    }));
  }

}

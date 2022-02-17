import { Injectable } from '@angular/core';
import { EntityState, EntityStore, StoreConfig } from '@datorama/akita';
import {Todo, VISIBILITY_FILTER} from './todo.model';

export interface TodosState extends EntityState<Todo> {
  ui: {
    filter: VISIBILITY_FILTER
  };
}

const initialState = {
  ui: {filter: VISIBILITY_FILTER.SHOW_ALL}
};

@Injectable({ providedIn: 'root' })
@StoreConfig({
  name: 'todos'
})
export class TodosStore extends EntityStore<TodosState> {

  constructor() {
    super(initialState);
  }

}

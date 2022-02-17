import { Component, OnInit } from '@angular/core';
import {Observable} from 'rxjs';

import {Todo, TodosQuery, TodosService} from '../../store/todos';
import {ID} from "@datorama/akita";

@Component({
  selector: 'app-todos-page',
  templateUrl: './todos-page.component.html',
  styleUrls: ['./todos-page.component.scss']
})
export class TodosPageComponent implements OnInit {

  public todos$: Observable<Todo[]> = this.todosQuery.selectAll();

  constructor(
    private todosQuery: TodosQuery,
    private todosService: TodosService,
  ) {
  }

  ngOnInit(): void {
  }

  add(title: string): void {
    this.todosService.add(title);
  }

  complete(todo: Todo): void {
    this.todosService.complete(todo);
  }

  delete(id: ID): void {
    this.todosService.delete(id);
  }

}

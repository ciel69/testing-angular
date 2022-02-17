import { Component, OnInit } from '@angular/core';
import {Observable} from 'rxjs';

import {Todo, TodosQuery} from '../../store/todos';

@Component({
  selector: 'app-todos-page',
  templateUrl: './todos-page.component.html',
  styleUrls: ['./todos-page.component.scss']
})
export class TodosPageComponent implements OnInit {

  public todos$: Observable<Todo[]> = this.todosQuery.selectAll();

  constructor(
    private todosQuery: TodosQuery,
  ) {
  }

  ngOnInit(): void {
  }

}

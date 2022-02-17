import {Component, OnInit} from '@angular/core';
import {TodosService} from './store/todos';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent implements OnInit {
  title = 'Todo list';

  constructor(
    private todosService: TodosService,
  ) {
  }

  ngOnInit(): void {
    this.todosService.get().subscribe();
  }

}

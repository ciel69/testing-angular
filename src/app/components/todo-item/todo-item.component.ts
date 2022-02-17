import {Component, EventEmitter, Input, OnInit, Output} from '@angular/core';
import {ID} from '@datorama/akita';

import {Todo} from '../../store/todos';

@Component({
  selector: 'app-todo-item',
  templateUrl: './todo-item.component.html',
  styleUrls: ['./todo-item.component.scss']
})
export class TodoItemComponent implements OnInit {

  @Input()
  todo!: Todo;

  @Output()
  complete = new EventEmitter<Todo>();

  @Output()
  delete = new EventEmitter<ID>();

  constructor() { }

  ngOnInit(): void {
  }

  handleComplete(): void {
    this.complete.emit({...this.todo, completed: !this.todo.completed});
  }

}

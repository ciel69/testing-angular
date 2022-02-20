import {Component, EventEmitter, OnInit, Output} from '@angular/core';

@Component({
  selector: 'app-form',
  templateUrl: './form.component.html',
  styleUrls: ['./form.component.scss']
})
export class FormComponent implements OnInit {

  @Output()
  addTodo = new EventEmitter<string>();

  constructor() { }

  ngOnInit(): void {
  }

  add(input: HTMLInputElement): void {
    if (input.value) {
      this.addTodo.emit(input.value);
      input.value = '';
    }
  }

}

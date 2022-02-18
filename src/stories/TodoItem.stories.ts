// also exported from '@storybook/angular' if you can deal with breaking changes in 6.1
import { moduleMetadata } from '@storybook/angular';
import { Story, Meta } from '@storybook/angular/types-6-0';

import {TodoItemComponent} from '../app/components/todo-item/todo-item.component';
import {NzModule} from '../app/nz.module';


const todo = {
  id: 1,
  completed: false,
  title: 'Test todo'
};

export default {
  title: 'Example/TodoItem',
  component: TodoItemComponent,
  decorators: [
    moduleMetadata({
      imports: [NzModule],
    }),
  ],
} as Meta;

const Template: Story<TodoItemComponent> = (args: TodoItemComponent) => ({
  props: args,
});

export const Start = Template.bind({});
Start.args = {
  todo,
};

export const Completed = Template.bind({});
Completed.args = {
  todo: {
    ...todo,
    completed: true,
  }
};

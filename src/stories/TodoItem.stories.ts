// also exported from '@storybook/angular' if you can deal with breaking changes in 6.1
import { moduleMetadata } from '@storybook/angular';
import { Story, Meta } from '@storybook/angular/types-6-0';

import {TodoItemComponent} from "../app/components/todo-item/todo-item.component";
import {NzGridModule} from "ng-zorro-antd/grid";
import {NzTypographyModule} from "ng-zorro-antd/typography";
import {NzCardModule} from "ng-zorro-antd/card";
import {NzIconModule} from "ng-zorro-antd/icon";

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
      imports: [NzGridModule, NzTypographyModule, NzCardModule, NzIconModule],
    }),
  ],
} as Meta;

const Template: Story<TodoItemComponent> = (args: TodoItemComponent) => ({
  props: args,
});

export const Default = Template.bind({});
Default.args = {
  todo,
};

export const Completed = Template.bind({});
Completed.args = {
  todo: {
    ...todo,
    completed: true,
  }
};

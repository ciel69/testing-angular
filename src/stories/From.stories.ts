import { moduleMetadata } from '@storybook/angular';
import { Story, Meta } from '@storybook/angular/types-6-0';

import {NzModule} from '../app/nz.module';
import {FormComponent} from "../app/components/form/form.component";

export default {
  title: 'Example/Form',
  component: FormComponent,
  decorators: [
    moduleMetadata({
      imports: [NzModule],
    }),
  ],
} as Meta;

const Template: Story<FormComponent> = (args: FormComponent) => ({
  props: args,
});

export const Default = Template.bind({});
Default.args = {};

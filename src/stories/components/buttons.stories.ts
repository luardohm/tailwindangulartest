import { ButtonComponent } from './../../app/evdi-components/button/button.component';
import { HeadlineComponent } from '../../app/evdi-components/headline/headline.component';
import { moduleMetadata } from '@storybook/angular';
import { CommonModule } from '@angular/common';
// also exported from '@storybook/angular' if you can deal with breaking changes in 6.1
import { Story, Meta } from '@storybook/angular';
import { EvdiComponentsModule } from 'src/app/evdi-components/evdi-components.module';

export default {
  title: 'Components/Buttons',
  component: ButtonComponent,
  decorators: [
    moduleMetadata({
      imports: [CommonModule, EvdiComponentsModule],
    }),
  ],
} as Meta;

const Template: Story<ButtonComponent> = (args: ButtonComponent) => ({
  component: ButtonComponent,
  props: args,
});

export const Large = Template.bind({});
Large.args = {
  text: 'Jetzt investieren'
};

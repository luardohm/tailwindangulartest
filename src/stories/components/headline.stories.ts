import { HeadlineComponent } from './../../app/evdi-components/headline/headline.component';
import { moduleMetadata } from '@storybook/angular';
import { CommonModule } from '@angular/common';
// also exported from '@storybook/angular' if you can deal with breaking changes in 6.1
import { Story, Meta } from '@storybook/angular';
import { EvdiComponentsModule } from 'src/app/evdi-components/evdi-components.module';

export default {
  title: 'Components/Headlines',
  component: HeadlineComponent,
  decorators: [
    moduleMetadata({
      imports: [CommonModule, EvdiComponentsModule],
    }),
  ],
} as Meta;

const Template: Story<HeadlineComponent> = (args: HeadlineComponent) => ({
  component: HeadlineComponent,
  props: args,
});

export const Large = Template.bind({});
Large.args = {
  title: "Welcome to this new one",
  size: 'large'
};

export const Default = Template.bind({});
Default.args = {
    title: "Welcome this is a title",
    subtitle: "and here some subhealine",
};

export const Small = Template.bind({});
Small.args = {
    title: "Welcome this is a title",
    subtitle: "and here some subhealine",
    size: 'small'
};

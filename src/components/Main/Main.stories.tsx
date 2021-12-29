import { ComponentMeta, ComponentStory } from '@storybook/react';
import { Main } from '.';

export default {
  title: 'Main',
  component: Main,
  args: {
    heading: 'title default'
  }
} as ComponentMeta<typeof Main>;

export const Default: ComponentStory<typeof Main> = (args) => (
  <Main {...args} />
);

export const Basic: ComponentStory<typeof Main> = (args) => <Main {...args} />;
Basic.args = {
  heading: 'Basic Block'
};

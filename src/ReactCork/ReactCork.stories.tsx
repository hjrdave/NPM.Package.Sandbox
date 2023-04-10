import React from 'react';
import { Meta, StoryFn } from '@storybook/react';
import Comp from './ReactCork';

export default {
  title: 'Packages/ReactCork',
  component: Comp,
  argTypes: {
    
  },
} as Meta<typeof Comp>;

const Template: StoryFn<typeof Comp> = (args) => (<Comp {...args as any} />);

export const Primary = Template.bind({});
Primary.args = {

};

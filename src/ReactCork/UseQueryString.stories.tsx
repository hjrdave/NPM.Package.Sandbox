import React from 'react';
import { StoryFn } from '@storybook/react';
import useQueryString from 'react-cork/src/useQueryString';

export default {
  title: 'Packages/ReactCork/UseQueryString',
  argTypes: {
    
  },
};

const Template: StoryFn = (args) => {

  const query = useQueryString(args.key);

  return(
    <>
      <p>Query String Value: {query}</p>
    </>
  )
};
export const Primary = Template.bind({});
Primary.args = {
  key: 'id'
};
import React from 'react';
import { StoryFn } from '@storybook/react';
import useCookie from 'react-cork/src/useCookie';

export default {
  title: 'Packages/ReactCork/UseCookie',
  argTypes: {
    
  },
};

const Template: StoryFn = (args) => {
  const cookie = useCookie('test-cookie');

  React.useEffect(() => {
      cookie.set('This is a cookie')
  },[]);
  return(
    <>
    <p>
        <code>{cookie.get}</code>
    </p>
    </>
  )
};
export const Primary = Template.bind({});

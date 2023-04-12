import React from 'react';
import useNonInitialEffect from 'react-cork/src/useNonInitialEffect';
import { Button } from 'react-bootstrap';
import { StoryFn } from '@storybook/react';
import useAnimate from 'react-cork/src/useAnimate';

export default {
  title: 'Packages/ReactCork/UseAnimate',
  argTypes: {
    type: {
      options: [
        'scale',
        'translate',
        'fadeIn'
      ],
      control: { type: 'select' }
    }
  }
};

const Template: StoryFn = (args) => {
 
  const animate = useAnimate({
    type: args.type,
    delay: args.delay,
    style: args.style,
    disabled: args.disabled
  });
  return(
    <>
      <div style={animate.style} className={'d-flex justify-content-center align-items-center'}>
        <p className={'mb-0'}>Animate</p>
      </div>
    </>
  )
};
export const Primary = Template.bind({});
Primary.args = {
  type: 'scale',
  delay: 1000,
  style: {height: '100px', width: '100px', backgroundColor: 'blue'},
  disabled: false
};

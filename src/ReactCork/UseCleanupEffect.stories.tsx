import React from 'react';
import { StoryFn } from '@storybook/react';
import useCleanupEffect from 'react-cork/src/useCleanupEffect';
import { Button } from 'react-bootstrap';

export default {
  title: 'Packages/ReactCork/UseCleanupEffect',
  argTypes: {
    
  },
};

const Template: StoryFn = (args) => {

  const [show, setShow] = React.useState(true);

  const CleanupExampleComp = () => {
    React.useEffect(() => {
      alert('Comp is mounted.')
    },[]);
    useCleanupEffect(() => {
      alert('Comp is unmounted');
    });
    return(
      <>
        <h3 className={'mt-4'}>Cleanup Example:</h3>
        <p>Clean up will fire when component unmounts.</p>
      </>
    )
  };

  return(
    <>
      <div className={'d-flex'}>
        <Button onClick={() => setShow(false)} className={'me-2'}>Unmount</Button>
        <Button onClick={() => setShow(true)}>Mount</Button>
      </div>
      {
        (show) ? <CleanupExampleComp/> : null
      }
    </>
  )
};
export const Primary = Template.bind({});

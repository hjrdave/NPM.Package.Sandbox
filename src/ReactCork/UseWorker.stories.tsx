import React from 'react';
import useNonInitialEffect from 'react-cork/src/useNonInitialEffect';
import { Button } from 'react-bootstrap';
import calculatePrimes from './calcPrimes';
import { StoryFn } from '@storybook/react';
import useWorker from 'react-cork/src/useWorker';

export default {
  title: 'Packages/ReactCork/UseWorker',
  argTypes: {
    
  },
};

const Template: StoryFn = (args) => {
 
  const [primes, setPrimes] = React.useState<string>('Click to Calculate');
  const worker = useWorker<number[]>(() => calculatePrimes(0, 1000));

  useNonInitialEffect(() => {
    if(worker.data !== null){
      setPrimes(`Number of Primes: ${worker.data.length}`);
    }
  },[worker.data]);
  return(
    <>
      <Button onClick={() => {setPrimes('Calculating...'); worker.run()}} className={'me-2'}>Calculate</Button>
      <Button>Test Non-Blocking Click</Button>
      <p className={'text-white mt-4'}>{primes}</p>
    </>
  )
};
export const Primary = Template.bind({});

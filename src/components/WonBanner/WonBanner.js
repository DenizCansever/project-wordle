import React from 'react';

import Banner from '../Banner';
import Fireworks from '../Fireworks';
import { playWinSound } from '../../sounds';

function WonBanner({ numOfGuesses, onReset }) {
  React.useEffect(() => {
    playWinSound();
  }, []);

  return (
    <>
      <Fireworks />
      <Banner status='happy'>
        <p>
          <strong>Congratulations!</strong> Got it in{' '}
          <strong>
            {numOfGuesses === 1 ? '1 guess' : `${numOfGuesses} guesses`}
          </strong>
          .
        </p>
        <button className='play-again-btn' onClick={onReset}>
          Play Again
        </button>
      </Banner>
    </>
  );
}

export default WonBanner;

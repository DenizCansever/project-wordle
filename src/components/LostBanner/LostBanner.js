import React from 'react';

import Banner from '../Banner';
import { playLoseSound } from '../../sounds';

function LostBanner({ answer, onReset }) {
  React.useEffect(() => {
    playLoseSound();
  }, []);

  return (
    <Banner status='sad'>
      <p>
        Sorry, the correct answer is{' '}
        <strong className='answer-bounce'>{answer}</strong>.
      </p>
      <button className='play-again-btn' onClick={onReset}>
        Play Again
      </button>
    </Banner>
  );
}

export default LostBanner;

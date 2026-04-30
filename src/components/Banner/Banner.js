import React from 'react';

function Banner({ gameStatus, answer, numOfGuesses }) {
  const content =
    gameStatus === 'won' ? (
      <p>
        <strong>Congratulations!</strong> Got it in{' '}
        <strong>
          {numOfGuesses === 1 ? '1 guess' : `${numOfGuesses} guesses`}
        </strong>
        .
      </p>
    ) : (
      <p>
        Sorry, the correct answer is <strong>{answer}</strong>.
      </p>
    );

  return (
    <div
      className={`banner ${gameStatus === 'won' ? 'happy' : 'sad'}`}>
      {content}
    </div>
  );
}

export default Banner;

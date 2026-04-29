import React from 'react';

import { sample } from '../../utils';
import { WORDS } from '../../data';
import GuessInput from '../GuessInput';
import GuessResult from '../GuessResult';
import { NUM_OF_GUESSES_ALLOWED } from '../../constants';

// Pick a random word on every pageload.
const answer = sample(WORDS);
// To make debugging easier, we'll log the solution in the console.
console.info({ answer });

function Game() {
  const [guessList, setGuessList] = React.useState([]);

  function handleSubmitGuess(tentativeGuess) {
    const nextGuessList = [
      ...guessList,
      { label: [...tentativeGuess], value: crypto.randomUUID() },
    ];

    setGuessList(nextGuessList);
  }
  return (
    <>
      <GuessResult guessList={guessList} />
      <GuessInput
        handleSubmitGuess={handleSubmitGuess}
        isDisabled={guessList?.length >= NUM_OF_GUESSES_ALLOWED}
      />
    </>
  );
}

export default Game;

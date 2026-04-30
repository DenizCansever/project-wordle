import React from 'react';

import { sample } from '../../utils';
import { WORDS } from '../../data';
import GuessInput from '../GuessInput';
import GuessResult from '../GuessResult';
import { NUM_OF_GUESSES_ALLOWED } from '../../constants';
import { checkGuess } from '../../game-helpers';
import WonBanner from '../WonBanner';
import LostBanner from '../LostBanner';

// Pick a random word on every pageload.
const answer = sample(WORDS);
// To make debugging easier, we'll log the solution in the console.
console.info({ answer });

function Game() {
  const [guessList, setGuessList] = React.useState([]);
  const [gameStatus, setGameStatus] = React.useState('ongoing');

  function handleSubmitGuess(tentativeGuess) {
    const nextGuessList = [
      ...guessList,
      {
        label: checkGuess(tentativeGuess, answer),
        value: crypto.randomUUID(),
      },
    ];

    setGuessList(nextGuessList);

    if (tentativeGuess.toUpperCase() === answer) {
      setGameStatus('won');
      return;
    }

    if (nextGuessList.length >= NUM_OF_GUESSES_ALLOWED) {
      setGameStatus('lost');
    }
  }

  return (
    <>
      <GuessResult guessList={guessList} />
      <GuessInput
        handleSubmitGuess={handleSubmitGuess}
        isDisabled={gameStatus !== 'ongoing'}
      />
      {gameStatus === 'won' && (
        <WonBanner numOfGuesses={guessList.length} />
      )}
      {gameStatus === 'lost' && <LostBanner answer={answer} />}
    </>
  );
}

export default Game;

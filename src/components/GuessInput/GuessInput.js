import React from 'react';

function GuessInput() {
  const [guess, setGuess] = React.useState('');

  function handleChange(event) {
    const nextGuess = event.target.value.toUpperCase();
    setGuess(nextGuess);
  }

  function handleSubmit(event) {
    event.preventDefault();
    console.log({ guess });
    setGuess('');
  }

  return (
    <form className='guess-input-wrapper' onSubmit={handleSubmit}>
      <label htmlFor='guess-input'>Enter guess:</label>
      <input
        id='guess-input'
        type='text'
        onChange={handleChange}
        value={guess}
        maxLength={5}
        minLength={5}
        pattern='[a-zA-Z]{5}'
        title='5 letter word'
        required
      />
    </form>
  );
}

export default GuessInput;

import React from 'react';

function GuessInput({ isDisabled = false, handleSubmitGuess }) {
  const [tentativeGuess, setTentativeGuess] = React.useState('');
  const inputRef = React.useRef(null);

  function handleChange(event) {
    const nextGuess = event.target.value.toUpperCase();
    setTentativeGuess(nextGuess);
  }

  function handleSubmit(event) {
    event.preventDefault();
    handleSubmitGuess(tentativeGuess);
    setTentativeGuess('');
    if ('ontouchstart' in window) {
      inputRef.current?.blur();
    }
  }

  return (
    <form className='guess-input-wrapper' onSubmit={handleSubmit}>
      <label htmlFor='guess-input'>Enter guess:</label>
      <input
        ref={inputRef}
        id='guess-input'
        type='text'
        onChange={handleChange}
        value={tentativeGuess}
        maxLength={5}
        minLength={5}
        pattern='[a-zA-Z]{5}'
        title='5 letter word'
        required
        disabled={isDisabled}
      />
    </form>
  );
}

export default GuessInput;

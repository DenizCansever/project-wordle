import React from 'react';

function GuessResult({ guessList = [] }) {
  return (
    <div className='guess-results'>
      {guessList.map(({ label, value }) => (
        <p key={value} className='guess'>
          {label}
        </p>
      ))}
    </div>
  );
}

export default GuessResult;

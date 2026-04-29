import React from 'react';

import { range } from '../../utils';

function Guess({ value = [] }) {
  const numOfCols = range(5);

  return (
    <p className='guess'>
      {numOfCols.map((numCol) => (
        <span key={numCol} className='cell'>
          {value[numCol]}
        </span>
      ))}
    </p>
  );
}

export default Guess;

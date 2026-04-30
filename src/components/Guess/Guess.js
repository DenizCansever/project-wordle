import React from 'react';

import { range } from '../../utils';

function Guess({ value = [] }) {
  const numOfCols = range(5);

  return (
    <p className='guess'>
      {numOfCols.map((numCol) => {
        const cellClassName = value[numCol]?.status
          ? `cell ${value[numCol]?.status}`
          : 'cell';

        return (
          <span key={numCol} className={cellClassName}>
            {value[numCol]?.letter}
          </span>
        );
      })}
    </p>
  );
}

export default Guess;

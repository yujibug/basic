import React from 'react';

export default function TotalCounter({ totalCount }) {
  return (
    <div className='totalCounter'>
      <span>
        Total Count: {totalCount} {totalCount >= 10 ? '🔥' : '❄️'}
      </span>
    </div>
  );
}

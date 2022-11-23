import React from 'react';

export default function Avatar({ image, isNew }) {
  return (
    <div className='avatar'>
      <img src={image} alt='avatar' className='photo' />
      {isNew && <strong className='new'>NEW</strong>}
    </div>
  );
}

import React from 'react';

export default function Profile({ image, name, title, attribute }) {
  return (
    <div className='profile'>
      {attribute === 'new' && <strong className='new'>NEW</strong>}
      <img src={image} alt='avatar' className='photo' />
      <h1>{name}</h1>
      <p>{title}</p>
    </div>
  );
}

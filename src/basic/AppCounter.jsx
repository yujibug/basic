import React, { useState } from 'react';
import './App.css';
import Counter from './components/Counter';
import TotalCounter from './components/TotalCounter';

export default function AppCounter() {
  const [totalCount, setTotalCount] = useState(0);
  const handleClick = () => {
    setTotalCount((prev) => prev + 1);
  };
  return (
    <div className='container'>
      <TotalCounter totalCount={totalCount} />
      <Counter totalCount={totalCount} onClick={handleClick} />
      <Counter totalCount={totalCount} onClick={handleClick} />
    </div>
  );
}

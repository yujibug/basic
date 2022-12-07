import React, { useEffect, useState, useRef } from 'react';
import './AppXY.css';

export default function AppXY() {
  const [position, setPosition] = useState({ x: 0, y: 0 });
  const pointer = useRef();

  useEffect(() => {
    pointer.current.style = `transform: translate(${position.x}px, ${position.y}px);`;
  }, [position]);
  return (
    <div
      className='container'
      onPointerMove={(event) => {
        setPosition({ x: event.clientX, y: event.clientY });
        // // 만약 수평으로만 이동이 가능하다면?
        // setPosition((prev) => ({ ...prev, x: event.clientX }));
      }}
    >
      <div className='pointer' ref={pointer}></div>
    </div>
  );
}

'use client';


import React, { useState } from 'react';

function Bit(props) {
  const [isOn, setIsOn] = useState(false);
  const [number, setNumber] = useState(0);

  function handleClick() {
    setIsOn(!isOn);
    setNumber(isOn ? 0 : 1);

    // Rufe die Callback-Prop auf und gib ihr den Wert von number
    props.onNumber(number);
  }

  return (
    <div className="text-center">
      <button
        className={isOn ? 'bg-green-400 p-4' : 'bg-red-600 p-4'}
        onClick={handleClick}
      >
        {isOn ? 'Ein' : 'Aus'}
      </button>
      <p className="font-[led] font-bold text-3xl text-green-400 pt-2" id={"result-" + props.id}>
        {number}
      </p>
    </div>
  );
}

export default Bit;
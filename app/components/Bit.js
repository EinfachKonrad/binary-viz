'use client';



import React, { useState } from 'react';
import props from 'prop-types';

function Bit (props) {
  const [isOn, setIsOn] = useState(true);
  const [number, setNumber] = useState(1);

  function handleClick() {
    setIsOn(!isOn);
    setNumber(isOn ? 0 : 1);

    calculate();
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

export function calculate() {

  var result1 = document.getElementById("result-1").innerHTML;
  var result2 = document.getElementById("result-2").innerHTML;
  var result3 = document.getElementById("result-3").innerHTML;
  var result4 = document.getElementById("result-4").innerHTML;
  var result5 = document.getElementById("result-5").innerHTML;
  var result6 = document.getElementById("result-6").innerHTML;
  var result7 = document.getElementById("result-7").innerHTML;
  var result8 = document.getElementById("result-8").innerHTML;

  const bin = result1 + result2 + result3 + result4 + result5 + result6 + result7 + result8;
  const decimalResult = parseInt(bin, 2).toString(10);

  document.getElementById("decimal").innerHTML = result1 + result2 + result3 + result4 + result5 + result6 + result7 + result8;
}
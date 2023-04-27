'use client';

import React, { useState } from 'react';
import props from 'prop-types';
{/* import { alpha, styled } from '@mui/material/styles';
import { pink } from '@mui/material/colors'; */}
import Switch from '@mui/material/Switch';

function Bit (props) {
  const [isOn, setIsOn] = useState(false);
  const [number, setNumber] = useState(0);

  function handleClick() {
    setIsOn(!isOn);
    setNumber(isOn ? 0 : 1);

    setTimeout(function(){
      calculate();
    }, 10);

  }
  

  const label = { inputProps: { 'aria-label': 'Click the switch' } };

  return (
    <div className="text-center">
      <p className=" font-bold text-3xl text-white pt-2" id={"pot-" + props.id}>
        {Math.pow(2, props.id - 1).toString()}
      </p>

      {/* <button
        className={isOn ? 'bg-green-400 p-4' : 'bg-red-600 p-4'}
        onClick={handleClick}
      >
        {isOn ? 'Ein' : 'Aus'}
      </button> */}

      <div>
        <Switch {...label} onChange={handleClick} color='error' />
      </div>

      <p className="font-[led] font-bold text-3xl text-green-400 pt-2" id={"result-" + props.id}>
        {number}
      </p>
    </div>
  );
}

export default Bit; 


// Other functions

export function calculate() {

  var result1 = document.getElementById("result-1").innerHTML;
  var result2 = document.getElementById("result-2").innerHTML;
  var result3 = document.getElementById("result-3").innerHTML;
  var result4 = document.getElementById("result-4").innerHTML;
  var result5 = document.getElementById("result-5").innerHTML;
  var result6 = document.getElementById("result-6").innerHTML;
  var result7 = document.getElementById("result-7").innerHTML;
  var result8 = document.getElementById("result-8").innerHTML;

  const bin = result8 + result7 + result6 + result5 + result4 + result3 + result2 + result1;
  const decimalResult = parseInt(bin, 2).toString(10);

  document.getElementById("decimal").innerHTML = "Decimal: " + decimalResult;
}
'use client';

import Bit from './components/Bit';
import React, { useState } from 'react';

function Home() {
  const [numbers, setNumbers] = useState([]);


  return (
    <>
      <div>
        <h1 className="text-center text-7xl font-bold">Binary Vizualizer</h1>
        <p className="text-center text-lg pt-2">Under Development!</p>
      </div>

      <div className="grid grid-cols-8 gap-4 my-[5%] mx-[10%]">
        <Bit id="8" />
        <Bit id="7" />
        <Bit id="6" />
        <Bit id="5" />
        <Bit id="4" />
        <Bit id="3" />
        <Bit id="2" />
        <Bit id="1" />
      </div>

      {/* Rende ein Element, das den Binärcode anzeigt */}
      <div className="text-center text-4xl font-bold">
        <h2 id='decimal'>0</h2>
      </div>
    </>
  );
}

export default Home;
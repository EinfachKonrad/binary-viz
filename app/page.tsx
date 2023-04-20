'use client';

import Bit from './components/Bit';
import React, { useState } from 'react';

function Home() {
  const [numbers, setNumbers] = useState([]);

  // Definiere einen State, der ein Objekt mit den Schlüsseln 1 bis 8 und den Werten 0 oder 1 enthält
  const [binaryCode, setBinaryCode] = useState({
    1: 0,
    2: 0,
    3: 0,
    4: 0,
    5: 0,
    6: 0,
    7: 0,
    8: 0,
  });

  // Ändere die handleNumber-Funktion, so dass sie neben dem Wert von number auch die id der Bit-Komponente als Argument nimmt
  function handleNumber(number, id) {
    setNumbers((numbers) => [...numbers, number]);

    // Aktualisiere den State, indem du den Wert von number dem entsprechenden Schlüssel in dem Objekt zuweist
    setBinaryCode((binaryCode) => ({
      ...binaryCode,
      [id]: number,
    }));
  }

  return (
    <>
      <div>
        <h1 className="text-center text-7xl font-bold">Binary Vizualizer</h1>
        <p className="text-center text-lg pt-2">Under Development!</p>
      </div>

      <div className="grid grid-cols-8 gap-4 my-[5%] mx-[10%]">
        {/* Übergib die Funktion als Prop an jede Bit-Komponente */}
        <Bit id="8" onNumber={handleNumber} />
        <Bit id="7" onNumber={handleNumber} />
        <Bit id="6" onNumber={handleNumber} />
        <Bit id="5" onNumber={handleNumber} />
        <Bit id="4" onNumber={handleNumber} />
        <Bit id="3" onNumber={handleNumber} />
        <Bit id="2" onNumber={handleNumber} />
        <Bit id="1" onNumber={handleNumber} />
      </div>

      {/* Rende ein Element, das den Binärcode anzeigt */}
      <div className="text-center text-4xl font-bold">
        Binärcode: {Object.values(binaryCode).join('')}
      </div>
    </>
  );
}

export default Home;
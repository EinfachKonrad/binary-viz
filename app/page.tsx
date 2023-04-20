import Bit from '@/components/bit'
import React from 'react'

function Home() {
  return (
    <>
      <div>
        <h1 className='text-center text-7xl font-bold'>Binary Vizualizer</h1>
        <p className='text-center text-lg pt-2'>Under Development!</p>
      </div>

      <div className='align-center'>
        <Bit />
        <Bit />
        <Bit />
        <Bit />
        <Bit />
        <Bit />
        <Bit />
        <Bit />
      </div>
    </>
  )
}

export default Home
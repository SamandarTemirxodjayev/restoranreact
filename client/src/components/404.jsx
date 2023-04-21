import React from 'react'
import { Link } from 'react-router-dom'

export default function Error404() {
  return (
    <div className='h-screen bg-dark-blue-set text-white flex justify-center items-center'>
      <div className="">
        <div className="font-bold text-center">
          <h1 className='text-9xl'>404</h1>
          <div className="text-3xl py-2">Sahifa topilmadi</div>
        </div>
        <div className="text-center text-black pt-6">
          <button className='bg-white px-32 py-4 rounded-3xl'>
            <Link to='/'>Bosh Saxifa</Link>
          </button>
        </div>
      </div>
    </div>
  )
}

import React from 'react'
import { Link } from 'react-router-dom'

export default function Error404() {
  return (
    <div className='h-screen bg-dark-blue-set text-white flex justify-center items-center'>
      <div className="">
        <div className="font-bold text-center">
          <h1 className='text-9xl'>404</h1>
          <div className="text-3xl py-2">Page Not Found</div>
          <div className="mx-8 text-lg">Lorem ipsum dolor sit amet, consectetur adipiscing elit. Duis semper convallis euismod vestibulum in pharetra.</div>
        </div>
        <div className="text-center text-black pt-6">
          <button className='bg-white px-32 py-4 rounded-3xl'>
            <Link to='/'>Back to Home</Link>
          </button>
        </div>
      </div>
    </div>
  )
}

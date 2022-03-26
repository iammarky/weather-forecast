import React from 'react'

export default function Button({ onClick, children }) {
  return (
    <button 
      type="button"
      onClick={() => { onClick ? onClick() : null }}
      className='text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:ring-blue-300 font-medium rounded-lg text-sm px-5 py-2.5 focus:outline-none'>
      { children }
    </button>
  )
}

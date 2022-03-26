import React from 'react'

export default function Button({ onClick, children, disabled }) {
  return (
    <button disabled={ disabled ? true : false }
      type="button"
      onClick={() => { onClick ? onClick() : null }}
      className={`text-white bg-blue-700 focus:ring-4 focus:ring-blue-300 font-medium rounded-lg text-sm px-5 py-2.5 focus:outline-nonefirst-letter:
        ${ disabled ? 'cursor-not-allowed' : 'cursor-pointer hover:bg-blue-800' }
      `}>
      { children }
    </button>
  )
}

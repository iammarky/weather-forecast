import React from 'react'

export default function Search() {
  return (
    <div className="relative"> 
      <input 
        type="text" 
        className="h-12 w-96 pr-8 pl-8 rounded-full border-2 z-0 focus:shadow focus:outline-none " 
        placeholder="City"
      />
      <div className="absolute top-4 left-3"> 
        <svg xmlns="http://www.w3.org/2000/svg" aria-hidden="true" role="img" width="1em" height="1em" preserveAspectRatio="xMidYMid meet" viewBox="0 0 16 16"><path fill="currentColor" d="M11.742 10.344a6.5 6.5 0 1 0-1.397 1.398h-.001c.03.04.062.078.098.115l3.85 3.85a1 1 0 0 0 1.415-1.414l-3.85-3.85a1.007 1.007 0 0 0-.115-.1zM12 6.5a5.5 5.5 0 1 1-11 0a5.5 5.5 0 0 1 11 0z"/></svg>
      </div>
    </div>
  )
}

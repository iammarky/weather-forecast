import React from 'react'
import { Button } from '../Button'

export default function Header() {
  return (
    <div className="flex h-20 w-screen justify-between border-b-2 px-4">
      <div className="flex h-full space-x-2">
        <img className="h-full py-4" src="/logo.png" alt="logo" />
        <h1 className="m-auto text-2xl font-bold"> Weather Forecast </h1>
      </div>
      <div className='flex justify-center items-center'>
        <Button onClick={() => alert('Hello')}> Logout </Button>
      </div>
    </div>
  )
}

import React from 'react'
import { Button } from '../Button'

export default function Login() {
  return (
    <div className='flex h-full w-full'>
      <div className='m-14 lg:mx-auto lg:w-1/4 space-y-4'>
        <h1>
          Welcome to the weather forecast web application. Please login your
          Github user to use the application and view the weather in your city
        </h1>
        <Button onClick={() => alert('Hello')}> Login </Button>
      </div>
    </div>
  )
}

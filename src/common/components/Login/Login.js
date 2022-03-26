import React from 'react'
import { useRouter } from 'next/router'
import { Button } from '../Button'

export default function Login() {
  const router = useRouter()

  // Redirect the user to auth0 login page
  const handleLogin = e => {
    router.push('/api/auth/login')
  }

  return (
    <div className='flex h-full w-full'>
      <div className='m-14 lg:mx-auto lg:w-1/4 space-y-4'>
        <h1>
          Welcome to the weather forecast web application. Please login your
          Github user to use the application and view the weather in your city
        </h1>
        <Button onClick={() => handleLogin()}> Login </Button>
      </div>
    </div>
  )
}

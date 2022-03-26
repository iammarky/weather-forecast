import React from 'react'
import { useRouter } from 'next/router'
import { useUser } from '@auth0/nextjs-auth0'
import { Button } from '../Button'

export default function Header() {
  const router = useRouter()
  const { user } = useUser()

  // the logout api will be invoked and the user will be logged out
  const handleLogout = e => {
    router.push('/api/auth/logout')
  }

  return (
    <div className="flex h-20 w-screen justify-between border-b-2 px-4">
      <div className="flex h-full space-x-2">
        <img className="h-full py-4" src="/logo.png" alt="logo" />
        <h1 className="m-auto text-2xl font-bold"> Weather Forecast </h1>
      </div>
      <div className='flex justify-center items-center'>
        { user && (
          <Button onClick={() => handleLogout()}> Logout </Button>
        )}
      </div>
    </div>
  )
}

import React, { useEffect } from 'react'
import Head from 'next/head'
import Router from 'next/router'
import { useUser } from '@auth0/nextjs-auth0'
import { Header } from '../common/components/Header'
import Login from '../common/components/Login/Login'

export default function login() {
  const { user } = useUser()

  useEffect(() => {
    if (user) {
      Router.push('/weather/search')
    }
  }, [user])
  
  return (
    <div className='h-screen w-screen overflow-hidden'>
      <Head>
        <title>Login - Weather Forecast</title>
      </Head>
      <Header />
      <Login />
    </div>
  )
}

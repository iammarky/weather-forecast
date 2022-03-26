import React from 'react'
import Head from 'next/head'
import { Header } from '../common/components/Header'
import Login from '../common/components/Login/Login'

export default function login() {
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

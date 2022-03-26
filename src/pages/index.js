import React, { useState, useEffect } from 'react'
import Head from 'next/head'
import { Header } from '../common/components/Header'
import { WeatherCheck, WeatherResult } from '../modules/weather'

export default function Home() {
  return (
    <div className='h-screen w-screen overflow-hidden'>
      <Head>
        <title>Weather Forecast</title>
      </Head>
      <Header />
      <WeatherCheck /> 
      <WeatherResult /> 
    </div>
  )
}
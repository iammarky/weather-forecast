import React, { useState, useEffect } from 'react'
import Head from 'next/head'
import { Header } from '../../common/components/Header'
import { WeatherCheck, WeatherResult } from '../../modules/weather'

export default function Forecast(props) {
  const { date, description, forecast, humidity, main, pressure, temperature } = props
  return (
    <div className='h-screen w-screen overflow-hidden'>
      <Head>
        <title>Weather Forecast</title>
      </Head>
      <Header />
      { forecast && forecast[0] === 'result'
        ? <WeatherResult date={date} description={description} forecast={forecast} humidity={humidity} main={main} pressure={pressure} temperature={temperature} /> 
        : <WeatherCheck /> 
      }
    </div>
  )
}

export async function getServerSideProps(context) {
  return {
    props: context.query
  }
}
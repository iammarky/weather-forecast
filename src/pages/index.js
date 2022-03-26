import Head from 'next/head'
import { Header } from '../common/components/Header'
import Login from '../common/components/Login/Login'
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

import React, { useState } from 'react'
import Router from 'next/router'
import { useUser } from '@auth0/nextjs-auth0'
import { Button } from '../../common/components/Button'

export default function WeatherCheck() {
  const { user } = useUser()
  const [city, setcity] = useState('')
  const [error, seterror] = useState({ status: false, message: '' })

  function getWeather() {
    fetch('https://api.openweathermap.org/data/2.5/weather?q=' + city + '&units=imperial&appid=' + process.env.NEXT_PUBLIC_OPEN_WEATHER_KEY)
      .then(res => res.json())
      .then(data => {
        Router.push({
          pathname: '/weather/result',
          query: {
            date: data.dt, 
            temperature: data.main.temp, 
            description: data.weather[0].description, 
            main: data.weather[0].main, 
            pressure: data.main.pressure, 
            humidity: data.main.humidity 
          }
        })
      })
      .catch(err => {
        seterror({ status: true, message: 'City not found!' })
      })
  }

  return (
    <div className='flex h-full w-full pt-10'>
      <div className='mx-auto flex flex-col space-y-2'>
        <h1 className='mx-auto text-lg font-bold'> { user && user.name } </h1>
        <span className='mx-auto'>https://github.com/iammarky</span>
        <div className='pt-12 flex-col flex justify-center items-center space-y-4'>
          <div className="relative"> 
            <input 
              type="text" 
              className="h-12 w-96 pr-8 pl-8 rounded-full border-2 z-0 focus:shadow focus:outline-none " 
              placeholder="City"
              value={city}
              onChange={(e) => setcity(e.target.value)}
            />
            <div className="absolute top-4 left-3"> 
              <svg xmlns="http://www.w3.org/2000/svg" aria-hidden="true" role="img" width="1em" height="1em" preserveAspectRatio="xMidYMid meet" viewBox="0 0 16 16"><path fill="currentColor" d="M11.742 10.344a6.5 6.5 0 1 0-1.397 1.398h-.001c.03.04.062.078.098.115l3.85 3.85a1 1 0 0 0 1.415-1.414l-3.85-3.85a1.007 1.007 0 0 0-.115-.1zM12 6.5a5.5 5.5 0 1 1-11 0a5.5 5.5 0 0 1 11 0z"/></svg>
            </div>
          </div>
          { error.status && <span className='text-red-600'>{error.message}</span> }
          <Button onClick={() => city && getWeather()} disabled={ city ? false : true }> Display Weather </Button>
        </div>
      </div>
    </div>
  )
}

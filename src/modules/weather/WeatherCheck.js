import React from 'react'
import { Button } from '../../common/components/Button'
import { Search } from '../../common/components/Search'

export default function WeatherCheck() {
  return (
    <div className='flex h-full w-full pt-10'>
      <div className='mx-auto flex flex-col space-y-2'>
        <h1 className='mx-auto text-lg font-bold'>John Smith</h1>
        <span className='mx-auto'>https://github.com/iammarky</span>
        <div className='pt-12 flex-col flex justify-center items-center space-y-4'>
          <Search />
          <Button onClick={() => alert('Hello')}> Display Weather </Button>
        </div>
      </div>
    </div>
  )
}

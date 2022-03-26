import React from 'react'
import Router from 'next/router'
import { Button } from '../../common/components/Button'
import { convertDateMMDDYYYY } from '../../common/mixins/time'

export default function WeatherResult( { date, description, humidity, main, pressure, temperature } ) {
  return (
    <div className='flex h-full w-full pt-10'>
      <div className='mx-auto w-full flex flex-col px-4 sm:w-auto'>
        <table className='text-left border-collapse border-4 border-slate-500'>
          <thead className='bg-gray-100 border-b'>
            <tr>
              <th className='pr-6 pl-2 py-2 font-medium text-gray-900 whitespace-nowrap border-l-2 border-slate-600'> Date (mm/dd/yyyy) </th>
              <th className='pr-6 pl-2 py-2 font-medium text-gray-900 whitespace-nowrap border-l-2 border-slate-600'> Temp(F) </th>
              <th className='pr-6 pl-2 py-2 font-medium text-gray-900 whitespace-nowrap border-l-2 border-slate-600 hidden sm:table-cell'> Description </th>
              <th className='pr-6 pl-2 py-2 font-medium text-gray-900 whitespace-nowrap border-l-2 border-slate-600 hidden sm:table-cell'> Main </th>
              <th className='pr-6 pl-2 py-2 font-medium text-gray-900 whitespace-nowrap border-l-2 border-slate-600 hidden sm:table-cell'> Pressure </th>
              <th className='pr-6 pl-2 py-2 font-medium text-gray-900 whitespace-nowrap border-l-2 border-slate-600 hidden sm:table-cell'> Humidity </th>
            </tr>
          </thead>
          <tbody>
            <tr>
              <td className='pr-6 pl-2 py-2 font-medium text-gray-900 whitespace-nowrap border-l-2 border-slate-600'> { convertDateMMDDYYYY(date) } </td>
              <td className='pr-6 pl-2 py-2 font-medium text-gray-900 whitespace-nowrap border-l-2 border-slate-600'> { temperature } </td>
              <td className='pr-6 pl-2 py-2 font-medium text-gray-900 whitespace-nowrap border-l-2 border-slate-600 hidden sm:table-cell'> { description } </td>
              <td className='pr-6 pl-2 py-2 font-medium text-gray-900 whitespace-nowrap border-l-2 border-slate-600 hidden sm:table-cell'> { main } </td>
              <td className='pr-6 pl-2 py-2 font-medium text-gray-900 whitespace-nowrap border-l-2 border-slate-600 hidden sm:table-cell'> { pressure } </td>
              <td className='pr-6 pl-2 py-2 font-medium text-gray-900 whitespace-nowrap border-l-2 border-slate-600 hidden sm:table-cell'> { humidity } </td>
            </tr>
          </tbody>
        </table>
        <div className='pt-12 flex-col flex justify-end items-end space-y-4'>
          <Button onClick={() => {
            Router.push({
              pathname: '/weather/search',
            })
          }}> Back </Button>
        </div> 
      </div>
    </div>
  )
}
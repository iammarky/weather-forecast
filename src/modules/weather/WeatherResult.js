import React from 'react'
import { Button } from '../../common/components/Button'

export default function WeatherResult() {
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
              <td className='pr-6 pl-2 py-2 font-medium text-gray-900 whitespace-nowrap border-l-2 border-slate-600'> 09/01/2020 </td>
              <td className='pr-6 pl-2 py-2 font-medium text-gray-900 whitespace-nowrap border-l-2 border-slate-600'> 75 </td>
              <td className='pr-6 pl-2 py-2 font-medium text-gray-900 whitespace-nowrap border-l-2 border-slate-600 hidden sm:table-cell'> Sky is clear </td>
              <td className='pr-6 pl-2 py-2 font-medium text-gray-900 whitespace-nowrap border-l-2 border-slate-600 hidden sm:table-cell'> Clear </td>
              <td className='pr-6 pl-2 py-2 font-medium text-gray-900 whitespace-nowrap border-l-2 border-slate-600 hidden sm:table-cell'> 1023.68 </td>
              <td className='pr-6 pl-2 py-2 font-medium text-gray-900 whitespace-nowrap border-l-2 border-slate-600 hidden sm:table-cell'> 100 </td>
            </tr>
          </tbody>
        </table>
        <div className='pt-12 flex-col flex justify-end items-end space-y-4'>
          <Button> Back </Button>
        </div> 
      </div>
    </div>
  )
}

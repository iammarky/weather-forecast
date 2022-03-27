import React from "react"
import Router from "next/router"
import { Button } from "../../common/components/Button"
import { convertDateMMDDYYYY } from "../../common/mixins/time"

export default function WeatherResult({
  date,
  description,
  humidity,
  main,
  pressure,
  temperature,
}) {
  return (
    <div className="flex h-full w-full pt-10">
      <div className="mx-auto flex w-full flex-col px-4 sm:w-auto">
        <table className="border-collapse border-4 border-slate-500 text-left">
          <thead className="border-b bg-gray-100">
            <tr>
              <th className="whitespace-nowrap border-l-2 border-slate-600 py-2 pr-6 pl-2 font-medium text-gray-900"> Date (mm/dd/yyyy) </th>
              <th className="whitespace-nowrap border-l-2 border-slate-600 py-2 pr-6 pl-2 font-medium text-gray-900"> Temp (F) </th>
              <th className="hidden whitespace-nowrap border-l-2 border-slate-600 py-2 pr-6 pl-2 font-medium text-gray-900 sm:table-cell"> Description </th>
              <th className="hidden whitespace-nowrap border-l-2 border-slate-600 py-2 pr-6 pl-2 font-medium text-gray-900 sm:table-cell"> Main </th>
              <th className="hidden whitespace-nowrap border-l-2 border-slate-600 py-2 pr-6 pl-2 font-medium text-gray-900 sm:table-cell"> Pressure </th>
              <th className="hidden whitespace-nowrap border-l-2 border-slate-600 py-2 pr-6 pl-2 font-medium text-gray-900 sm:table-cell"> Humidity </th>
            </tr>
          </thead>
          <tbody>
            <tr>
              <td className="whitespace-nowrap border-l-2 border-slate-600 py-2 pr-6 pl-2 font-medium text-gray-900"> {convertDateMMDDYYYY(date)} </td>
              <td className="whitespace-nowrap border-l-2 border-slate-600 py-2 pr-6 pl-2 font-medium text-gray-900"> {temperature} </td>
              <td className="hidden whitespace-nowrap border-l-2 border-slate-600 py-2 pr-6 pl-2 font-medium text-gray-900 first-letter:uppercase sm:table-cell"> {description} </td>
              <td className="hidden whitespace-nowrap border-l-2 border-slate-600 py-2 pr-6 pl-2 font-medium text-gray-900 sm:table-cell"> {main} </td>
              <td className="hidden whitespace-nowrap border-l-2 border-slate-600 py-2 pr-6 pl-2 font-medium text-gray-900 sm:table-cell"> {pressure} </td>
              <td className="hidden whitespace-nowrap border-l-2 border-slate-600 py-2 pr-6 pl-2 font-medium text-gray-900 sm:table-cell"> {humidity} </td>
            </tr>
          </tbody>
        </table>
        <div className="flex flex-col items-end justify-end space-y-4 pt-12">
          <Button
            onClick={() => {
              Router.push({
                pathname: "/weather/search",
              })
            }}
          >
            Back
          </Button>
        </div>
      </div>
    </div>
  )
}

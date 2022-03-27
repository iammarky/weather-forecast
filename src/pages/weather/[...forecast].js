import React, { useEffect } from "react"
import Head from "next/head"
import Router from "next/router"
import { useUser } from "@auth0/nextjs-auth0"
import { Header } from "../../common/components/Header"
import { WeatherCheck, WeatherResult } from "../../modules/weather"

export default function Forecast(props) {
  const { date, description, forecast, humidity, main, pressure, temperature } =
    props
  const { user } = useUser()

  useEffect(() => {
    if (!user) {
      Router.push("/login")
    }
  }, [])

  if (user) {
    return (
      <div className="h-screen w-screen overflow-hidden">
        <Head>
          <title>Weather Forecast</title>
        </Head>
        <Header />
        {forecast && forecast[0] === "result" ? (
          <WeatherResult
            date={date}
            description={description}
            forecast={forecast}
            humidity={humidity}
            main={main}
            pressure={pressure}
            temperature={temperature}
          />
        ) : (
          <WeatherCheck />
        )}
      </div>
    )
  }

  return null
}

export async function getServerSideProps(context) {
  return {
    props: context.query,
  }
}

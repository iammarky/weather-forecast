import { useEffect } from "react"
import Router from "next/router"
import { useUser } from "@auth0/nextjs-auth0"

export default function Home() {
  const { user } = useUser()

  useEffect(() => {
    if (user) Router.push("/weather/search")
    else Router.push("/login")
  }, [])

  return null
}

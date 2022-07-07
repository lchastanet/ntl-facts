import { useState, useEffect } from "react"
import dayjs from "dayjs"
import "dayjs/locale/fr"

export default function Clock() {
  const [date, setDate] = useState(
    dayjs().locale("fr").format("dddd DD MMMM YYYY HH:mm:ss")
  )

  useEffect(() => {
    const clock = setInterval(() => {
      setDate(dayjs().locale("fr").format("dddd DD MMMM YYYY HH:mm:ss"))
    }, 1000)
    return () => {
      clearInterval(clock)
    }
  }, [])

  return <div>{date.toString()}</div>
}

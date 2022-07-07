import { useState, useEffect } from "react"

import { formatDate } from "../services/formatDate"

export default function Clock() {
  const [date, setDate] = useState(formatDate())

  useEffect(() => {
    const clock = setInterval(() => {
      setDate(formatDate())
    }, 1000)
    return () => {
      clearInterval(clock)
    }
  }, [])

  return <div>{date.toString()}</div>
}

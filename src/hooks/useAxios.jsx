import axios from "axios"
import { useState, useEffect } from "react"

export function useAxios(url) {
  const [data, setData] = useState({})
  const [error, setError] = useState(false)
  const [loader, setLoader] = useState(false)

  useEffect(() => {
    if (!url) return
    setLoader(true)
    async function fetchData() {
      try {
        const response = await axios.get(url)

        setData(response.data)
      } catch (e) {
        console.log(e)
        setError(true)
      } finally {
        setLoader(false)
      }
    }

    fetchData()
  }, [url])

  const loaderTemplate = <div>...</div>

  return { data, error, loader, loaderTemplate }
}

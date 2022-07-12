import FactCard from "./FactCard"

import { useAxios } from "../../hooks/useAxios"

export default function FactLoader({ type }) {
  const typeString = type.toLowerCase()

  const { data, error, loader, loaderTemplate } = useAxios(
    `https://some-random-api.ml/animal/${typeString}`
  )

  return <>{loader ? loaderTemplate : !error && <FactCard item={data} />}</>
}

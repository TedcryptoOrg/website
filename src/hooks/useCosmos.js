import { useContext } from 'react'
import { CosmosContext } from 'contexts/CosmosContext'

const useCosmos = () => {
  const cosmosContext = useContext(CosmosContext)

  if (cosmosContext === undefined) {
    throw new Error('Context undefined')
  }

  return cosmosContext
}

export default useCosmos

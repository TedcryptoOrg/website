import React from 'react'
import { CosmosProvider } from 'contexts/CosmosContext'

const Providers = ({ children }) => {
  return (
    <CosmosProvider>
      { children }
    </CosmosProvider>
  )
}

export default Providers

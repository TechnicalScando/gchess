import React from 'react'
import './App.css'

import Gchess from './Components/Gchess/Gchess'

const viewportContext = React.createContext({})

const ViewportProvider = ({ children }) => {
  const [width, setWidth] = React.useState(window.innerWidth)

  const handleWindowResize = () => {
    setWidth(window.innerWidth)
  }

  React.useEffect(() => {
    window.addEventListener('resize', handleWindowResize)
    return () => window.removeEventListener('resize', handleWindowResize)
  }, [])

  return (
    <viewportContext.Provider value={width}>
      {children}
    </viewportContext.Provider>
  )
}

function App () {
  return (
    <ViewportProvider>
      <Gchess />
    </ViewportProvider>

  )
}

export {
  App,
  viewportContext
}

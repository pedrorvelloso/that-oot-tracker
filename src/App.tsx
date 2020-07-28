import React from 'react'
import { render } from 'react-dom'

import GlobalStyle from './styles/global'

import Tracker from './screens/Tracker'

const App: React.FC = () => {
  return (
    <>
      <Tracker />
      <GlobalStyle />
    </>
  )
}

render(<App />, document.getElementById('root'))

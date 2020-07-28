import React from 'react'

import Songs from './Songs'
import Medallions from './Medallions/Medallions'

import { Container } from './styles'

const Tracker: React.FC = () => {
  return (
    <Container>
      <Songs />
      <Medallions />
    </Container>
  )
}

export default Tracker

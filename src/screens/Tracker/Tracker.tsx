import React from 'react'

import Songs from './Songs'
import Medallions from './Medallions/Medallions'
import Items from './Items'

import { Container } from './styles'

const Tracker: React.FC = () => {
  return (
    <Container>
      <Items />
      <Songs />
      <Medallions />
    </Container>
  )
}

export default Tracker

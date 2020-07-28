import React from 'react'
import medallions from '../../../items/medallions'

import Icon from '../../../components/Icon'

import { Container } from './styles'

const Medallions: React.FC = () => {
  return (
    <Container>
      {medallions.map(medallion => <Icon src={medallion.image} key={medallion.name} />)}
    </Container>
  )
}

export default Medallions

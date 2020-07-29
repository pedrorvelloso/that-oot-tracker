import React from 'react'
import medallions from '../../../items/medallions'

import MedallionIcon from '../../../components/MedallionIcon'

import { Container } from './styles'

const Medallions: React.FC = () => {
  return (
    <Container>
      {medallions.map(medallion => <MedallionIcon src={medallion.image} key={medallion.name} />)}
    </Container>
  )
}

export default Medallions

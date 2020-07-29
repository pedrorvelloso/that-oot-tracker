import React, { useState, useCallback } from 'react'

import Icon from '../Icon'
import { IconBaseProps } from '../Icon/Icon'

import { Text, Container } from './styles'

const locations = ['???', 'Free', 'Deku', 'DCVN', 'Jabu', 'Frst', 'Fire', 'Wtr', 'Sprt', 'Shdw']

const MedallionIcon: React.FC<IconBaseProps> = ({ src }) => {
  const [locationIndex, setLocationIndex] = useState(0)

  const onRightClick = useCallback((index: number) => {
    if (index === locations.length - 1) setLocationIndex(0)
    else setLocationIndex(prevLocation => prevLocation + 1)
  }, [])

  return (
    <Container>
      <Icon src={src} onRightClick={() => onRightClick(locationIndex)}/>
      <Text>{locations[locationIndex].toUpperCase()}</Text>
    </Container>
  )
}

export default MedallionIcon

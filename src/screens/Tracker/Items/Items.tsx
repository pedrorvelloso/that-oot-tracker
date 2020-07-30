import React from 'react'

import items, { ItemUpgrade } from '../../../items/items'

import UpgradableIcon from '../../../components/UpgradableIcon'

import { Container } from './styles'

const Items: React.FC = () => {
  return (
    <Container>
      {items.map(item => <UpgradableIcon upgrades={item.upgrades} singleImage={item.image} key={item.name} />)}
    </Container>
  )
}

export default Items

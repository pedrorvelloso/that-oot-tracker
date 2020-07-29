import React, { useState, useCallback } from 'react'

import Icon from '../Icon'
import { ItemUpgrade } from '../../items/items'

import { Text } from './styles'

interface UpgradableIconProps {
  upgrades: ItemUpgrade[]
  singleImage?: string;
}

const UpgradableIcon: React.FC<UpgradableIconProps> = ({
  upgrades,
  singleImage
}) => {
  const [acquired, setAcquired] = useState(false)
  const [upgradeIndex, setUpgradeIndex] = useState(0)

  const handleOnClick = useCallback(() => {
    if (!acquired) {
      setAcquired(true)
    } else {
      if (upgradeIndex <= upgrades.length - 2) setUpgradeIndex(prevIndex => prevIndex + 1)
    }
  }, [upgrades, upgradeIndex, acquired])

  const handleRightClick = useCallback(() => {
    if (acquired && upgradeIndex > 0) {
      setUpgradeIndex(prevIndex => prevIndex - 1)
    }
  }, [acquired, upgradeIndex])

  return (
    <Icon
      src={!singleImage ? upgrades[upgradeIndex].image : singleImage}
      onClick={acquiredFn => {
        if (!acquired) acquiredFn(true)
        handleOnClick()
      }}
      onRightClick={acquiredFn => {
        if (upgradeIndex === 0) {
          setAcquired(false)
          acquiredFn(false)
        }
        handleRightClick()
      }}
    >
      <Text
        maxed={upgradeIndex === upgrades.length - 1}
        opacity={!acquired}
      >
        {upgrades[upgradeIndex].text}
      </Text>
    </Icon>
  )
}

export default UpgradableIcon

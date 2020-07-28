import React, { useState } from 'react'

import Icon from '../Icon'

import { Check } from './styles'

interface IconCheckProps {
  src: string;
}

const IconCheck: React.FC<IconCheckProps> = ({ src }) => {
  const [checked, setChecked] = useState(false)

  return (
    <Icon src={src} onRightClick={() => setChecked(prevStatus => !prevStatus)}>
      {checked && <Check />}
    </Icon>
  )
}

export default IconCheck

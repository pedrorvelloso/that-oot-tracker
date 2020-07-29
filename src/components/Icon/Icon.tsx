import React, { useState } from 'react'

import { Container, IconStyled } from './styles'

export interface IconBaseProps {
  src: string;
}

interface IconProps extends IconBaseProps {
  onRightClick?: (setAcquired: React.Dispatch<React.SetStateAction<boolean>>) => void;
  onClick?: (setAcquired: React.Dispatch<React.SetStateAction<boolean>>) => void;
  className?: string;
}

const Icon: React.FC<IconProps> = ({ src, className, onRightClick, onClick, children }) => {
  const [acquired, setAcquired] = useState(false)

  return (
    <Container
      onClick={() => {
        if (onClick) onClick(setAcquired)
        else setAcquired(!acquired)
      }}
      onContextMenu={() => {
        if (onRightClick) onRightClick(setAcquired)
      }}
    >
      <IconStyled
        src={src}
        className={className}
        acquired={acquired}
      />
      {children}
    </Container>
  )
}

export default Icon

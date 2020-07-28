import React, { useState } from 'react'

import { Container, IconStyled } from './styles'

interface IconProps {
  src: string;
  onRightClick?: () => void;
  className?: string;
}

const Icon: React.FC<IconProps> = ({ src, className, onRightClick, children }) => {
  const [acquired, setAcquired] = useState(false)

  return (
    <Container
      onClick={() => setAcquired(!acquired)}
      onContextMenu={onRightClick}
    >
      <IconStyled
        src={src}
        acquired={acquired}
        className={className}
      />
      {children}
    </Container>
  )
}

export default Icon

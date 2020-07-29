import styled from 'styled-components'

interface TextProps {
  maxed: boolean;
  opacity: boolean;
}

export const Text = styled.span<TextProps>`
  position: absolute;

  bottom: 0;
  right: 0;

  color: ${props => props.maxed ? '#00FC68' : 'white'};
  font-weight: bold;
  font-size: 18px;

  opacity: ${props => props.opacity ? '0.3' : '1'}
`

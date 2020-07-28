import styled from 'styled-components'

interface IconStyledProps {
  acquired: boolean;
}

export const Container = styled.div`
  position: relative;

  & + div {
    margin-left: 10px;
  }
`

export const IconStyled = styled.img<IconStyledProps>`
  width: 40px;
  height: 40px;

  object-fit: scale-down;

  opacity: ${props => !props.acquired ? '0.3' : '1'};
`

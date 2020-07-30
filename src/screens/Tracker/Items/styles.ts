import styled from 'styled-components'

export const Container = styled.div`
  display: flex;
  flex-flow: row wrap;
  /* justify-content: space-between;

  ::after {
    content: "";
    flex: auto;
  } */

  > div {
    margin: 5px;
  }
`

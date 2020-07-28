import { createGlobalStyle } from 'styled-components'

export default createGlobalStyle`
  * {
    user-select: none;
    -webkit-user-drag: none;
    -khtml-user-drag: none;
    -moz-user-drag: none;
    -o-user-drag: none;
  }
`

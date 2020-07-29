import { createGlobalStyle } from 'styled-components'

import ReturnOfGanon from '../assets/fonts/ReturnofGanon.ttf'

export default createGlobalStyle`
  @font-face {
    font-family: 'Return of Ganon';
    src: url(${ReturnOfGanon});
    font-weight: 300;
    font-style: normal;
  }

  * {
    user-select: none;
    -webkit-user-drag: none;
    -khtml-user-drag: none;
    -moz-user-drag: none;
    -o-user-drag: none;

    font-family: 'Return of Ganon';
  }
`

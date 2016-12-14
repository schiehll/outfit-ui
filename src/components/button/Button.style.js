import em from '../../utils/pxToEm'
import {textColor} from '../../utils/colors'
import styleStates from './Button.states.style'
import styleSizes from './Button.sizes.style'
import styleTypes from './Button.types.style'

const button = (color, colors) => `
  background-color: ${colors[color]};
  color: ${textColor(colors[color], colors)};
`

const style = ({colors, sizes}) => `
  .base {
    border: none;
    border-radius: ${sizes.borderRadius}px;
    cursor: pointer;
    font-size: ${sizes.font}px;
    padding: ${em(sizes.font, 10)}em ${em(sizes.font, 20)}em;
    transition: all 0.15s ease;
  }

  .default {
    composes: base;
    ${button('default', colors)}
  }

  .primary {
    composes: base;
    ${button('primary', colors)}
  }

  .success {
    composes: base;
    ${button('success', colors)}
  }

  .info {
    composes: base;
    ${button('info', colors)}
  }

  .warning {
    composes: base;
    ${button('warning', colors)}
  }

  .danger {
    composes: base;
    ${button('danger', colors)}
  }

  ${styleStates(colors)}
  ${styleSizes(sizes)}
  ${styleTypes(colors, sizes)}
`

export default style

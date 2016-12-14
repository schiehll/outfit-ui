import {activeColor, hoverColor} from '../../utils/colors'
import configColors from '../../config/colors'

const states = (color, colors) => `
  .${color}:hover:enabled {
    background-color: ${hoverColor(colors[color])};
  }

  .${color}:active:enabled {
    background-color: ${activeColor(colors[color])};
  }

  .${color}:disabled {
    opacity: 0.65;
    cursor: not-allowed;
  }
`

const style = colors => `
  ${configColors.reduce((prev, current) => {
    return `${prev} ${states(current, colors)}`
  }, '')}
`

export default style

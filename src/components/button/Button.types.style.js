import em from '../../utils/pxToEm'
import {textColor, activeColor} from '../../utils/colors'
import configColors from '../../config/colors'

const outline = (color, colors, sizes) => `
  .${color}.outline {
    background-color: transparent;
    border: ${sizes.border}px solid ${colors[color]};
    color: ${colors[color]};
    padding: ${em(sizes.font, 10 - sizes.border)}em ${em(sizes.font, 20 - sizes.border)}em;
  }

  .${color}.outline:hover:enabled {
    background-color: ${colors[color]};
    color: ${textColor(colors[color], colors)};
  }

  .${color}.outline:active:enabled {
    background-color: ${activeColor(colors[color])};
    color: ${textColor(colors[color], colors)};
  }
`

const style = (colors, sizes) => `
  .round {
    border-radius: 10em;
  }

  .block {
    width: 100%;
  }

  ${configColors.reduce((prev, current) => {
    return `${prev} ${outline(current, colors, sizes)}`
  }, '')}
`

export default style

import {smallFont, bigFont} from '../../utils/fontSize'

const style = sizes => `
  .small {
    font-size: ${smallFont(sizes.font)}px;
  }

  .big {
    font-size: ${bigFont(sizes.font)}px;
  }
`

export default style

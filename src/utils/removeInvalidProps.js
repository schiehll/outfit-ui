import colors from '../config/colors'
import sizes from '../config/sizes'
import types from '../config/types'

const invalidProps = colors.concat(sizes).concat(types)

const removeInvalidProps = props => {
  const validProps = {...props}
  invalidProps.forEach(invalidProp => {
    if (validProps[invalidProp]) delete validProps[invalidProp]
  })

  return validProps
}

export default removeInvalidProps

import React, {PropTypes} from 'react'
import suitup from 'suit-up'
import style from './Button.style'
import colors from '../../config/colors'
import sizes from '../../config/sizes'
import types from '../../config/types'
import removeInvalidProps from '../../utils/removeInvalidProps'

const Button = props => {
  const {children, className, styles, ...otherProps} = props

  let classes = ``
  let shouldBeDefault = true

  const possibleProps = colors.concat(sizes).concat(types)
  possibleProps.forEach(prop => {
    if (props[prop]) {
      if (shouldBeDefault &&
        prop !== 'default' &&
        colors.indexOf(prop) >= 0) {
        shouldBeDefault = false
      }
      classes += ` ${styles[prop]} `
    }
  })

  if (shouldBeDefault) classes += `${styles.default}`
  if (className) classes += ` ${className}`

  const validProps = removeInvalidProps(otherProps)

  return (
    <button
      className={classes.trim()}
      {...validProps}
    >
      {children}
    </button>
  )
}

Button.propTypes = {
  className: PropTypes.string,
  outline: PropTypes.bool,
  round: PropTypes.bool,
  block: PropTypes.bool,
  small: PropTypes.bool,
  big: PropTypes.bool,
  primary: PropTypes.bool,
  success: PropTypes.bool,
  warning: PropTypes.bool,
  danger: PropTypes.bool
}

export default suitup(style)(Button)

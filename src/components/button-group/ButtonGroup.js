import React, {PropTypes, Children, cloneElement} from 'react'
import suitup from 'suit-up'
import style from './ButtonGroup.style'
import types from '../../config/types'
import removeInvalidProps from '../../utils/removeInvalidProps'

const ButtonGroup = props => {
  const {children, className, styles, ...otherProps} = props

  let classes = ``
  let shouldBeDefault = true

  types.forEach(prop => {
    if (props[prop]) {
      if (shouldBeDefault &&
        prop !== 'default' &&
        types.indexOf(prop) >= 0) {
        shouldBeDefault = false
      }
      classes += ` ${styles[prop]} `
    }
  })

  if (shouldBeDefault) classes += `${styles.default}`
  if (className) classes += ` ${className}`

  const validProps = removeInvalidProps(otherProps)

  const childrenWithProps = Children.map(children, child => {
    return cloneElement(child, otherProps)
  })

  return (
    <div
      className={classes.trim()}
      {...validProps}
    >
      {childrenWithProps}
    </div>
  )
}

ButtonGroup.propTypes = {
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

export default suitup(style)(ButtonGroup)

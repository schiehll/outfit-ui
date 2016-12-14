import React, {Component} from 'react'
import suitup from 'suit-up'
import {Button, ButtonGroup} from '../src'

const style = ({colors, sizes}) => `
  body {
    margin: 0;
    padding: 0;
    background-color: ${colors.background};
    background-image:
      linear-gradient(${colors.grid} 1px, transparent 1px),
      linear-gradient(90deg, ${colors.grid} 1px, transparent 1px);
    background-size: ${sizes.gridWidth}px ${sizes.gridHeight}px;
  }
`
@suitup(style)
class Container extends Component {
  render () {
    return (
      <div>
        <Button>Default Button</Button>
      </div>
    )
  }
}

export default Container

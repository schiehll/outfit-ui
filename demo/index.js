import React, {Component} from 'react'
import {render} from 'react-dom'
import {ThemeProvider} from 'suit-up'
import theme from './theme'
import Container from './Container'

class App extends Component {
  render () {
    return (
      <ThemeProvider theme={theme}>
        <Container/>
      </ThemeProvider>
    )
  }
}

render(<App/>, document.getElementById('root'))

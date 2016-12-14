import React from 'react'
import {render} from 'enzyme'
import {renderToJson} from 'enzyme-to-json'
import {ThemeProvider} from 'suit-up'
import Button from './index'

let styles
let theme

beforeAll(() => {
  theme = require('../../theme.example').default

  styles = {
    default: 'default',
    primary: 'primary',
    success: 'success',
    info: 'info',
    warning: 'warning',
    danger: 'danger',
    round: 'round',
    outline: 'outline'
  }
})

test('should render just fine', () => {
  const props = {styles}

  const component = render(
    <ThemeProvider theme={theme}>
      <Button {...props}>Btn</Button>
    </ThemeProvider>
  )

  expect(renderToJson(component)).toMatchSnapshot()
})

test('should accept props', () => {
  let props = {styles, primary: true}
  let component = render(
    <ThemeProvider theme={theme}>
      <Button {...props}>Btn</Button>
    </ThemeProvider>
  )

  expect(renderToJson(component)).toMatchSnapshot()

  props = {styles, success: true}
  component = render(
    <ThemeProvider theme={theme}>
      <Button {...props}>Btn</Button>
    </ThemeProvider>
  )

  expect(renderToJson(component)).toMatchSnapshot()

  props = {styles, info: true}
  component = render(
    <ThemeProvider theme={theme}>
      <Button {...props}>Btn</Button>
    </ThemeProvider>
  )

  expect(renderToJson(component)).toMatchSnapshot()

  props = {styles, round: true, outline: true}
  component = render(
    <ThemeProvider theme={theme}>
      <Button {...props}>Btn</Button>
    </ThemeProvider>
  )

  expect(renderToJson(component)).toMatchSnapshot()

  props = {styles, disabled: true}
  component = render(
    <ThemeProvider theme={theme}>
      <Button {...props}>Btn</Button>
    </ThemeProvider>
  )

  expect(renderToJson(component)).toMatchSnapshot()
})

test('should accept a className and merge it', () => {
  const props = {styles}

  const component = render(
    <ThemeProvider theme={theme}>
      <Button className='someClass' {...props}>Btn</Button>
    </ThemeProvider>
  )

  expect(renderToJson(component)).toMatchSnapshot()
})

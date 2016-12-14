import React from 'react'
import {render} from 'enzyme'
import {renderToJson} from 'enzyme-to-json'
import {ThemeProvider} from 'suit-up'
import ButtonGroup from './index'
import Button from '../button'

let styles
let theme

beforeAll(() => {
  theme = require('../../theme.example').default

  styles = {
    default: 'default'
  }
})

test('should render just fine', () => {
  const props = {styles}

  const component = render(
    <ThemeProvider theme={theme}>
      <ButtonGroup {...props}>
        <Button>Btn 1</Button>
        <Button>Btn 2</Button>
      </ButtonGroup>
    </ThemeProvider>
  )

  expect(renderToJson(component)).toMatchSnapshot()
})

test('should accept props and pass the relevant ones down', () => {
  let props = {styles, outline: true}
  let component = render(
    <ThemeProvider theme={theme}>
      <ButtonGroup {...props}>
        <Button>Btn 1</Button>
        <Button>Btn 2</Button>
      </ButtonGroup>
    </ThemeProvider>
  )

  expect(renderToJson(component)).toMatchSnapshot()

  props = {styles, round: true}
  component = render(
    <ThemeProvider theme={theme}>
      <ButtonGroup {...props}>
        <Button>Btn 1</Button>
        <Button>Btn 2</Button>
      </ButtonGroup>
    </ThemeProvider>
  )

  expect(renderToJson(component)).toMatchSnapshot()

  props = {styles, round: true, warning: true}
  component = render(
    <ThemeProvider theme={theme}>
      <ButtonGroup {...props}>
        <Button>Btn 1</Button>
        <Button>Btn 2</Button>
      </ButtonGroup>
    </ThemeProvider>
  )

  expect(renderToJson(component)).toMatchSnapshot()
})

test('should accept a className and merge it', () => {
  const props = {styles}

  const component = render(
    <ThemeProvider theme={theme}>
      <ButtonGroup className='someClass' {...props}>
        <Button>Btn 1</Button>
        <Button>Btn 2</Button>
      </ButtonGroup>
    </ThemeProvider>
  )

  expect(renderToJson(component)).toMatchSnapshot()
})

import Color from 'color'
import {textColor, activeColor, hoverColor} from './colors'

test('hoverColor should return the hex value of a 20% darker color', () => {
  const color = 'blue'
  const expected = new Color(color).darken(0.2).hexString()
  const received = hoverColor(color)

  expect(received).toEqual(expected)
})

test('activeColor should return the hex value of a 40% darker color', () => {
  const color = 'blue'
  const expected = new Color(color).darken(0.4).hexString()
  const received = activeColor(color)

  expect(received).toEqual(expected)
})

test('textColor should return the right color based on the lightness of the given one', () => {
  let color = 'black'

  const text = 'black'
  const invertedText = 'white'

  let received = textColor(color, {text, invertedText})

  expect(received).toEqual(invertedText)

  color = 'white'
  received = textColor(color, {text, invertedText})
  expect(received).toEqual(text)
})

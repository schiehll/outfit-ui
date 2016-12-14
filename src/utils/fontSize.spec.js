import {smallFont, bigFont} from './fontSize'

test('smallFont should return a 25% smaller size', () => {
  const fontSize = 20
  const expected = 15
  const received = smallFont(fontSize)

  expect(received).toEqual(expected)
})

test('bigFont should return a 25% bigger size', () => {
  const fontSize = 20
  const expected = 25
  const received = bigFont(fontSize)

  expect(received).toEqual(expected)
})

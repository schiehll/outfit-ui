import em from './pxToEm'

test('should convert pixel to em based on the given font size', () => {
  const fontSize = 20
  let expected = 1
  let received = em(fontSize, 20)

  expect(received).toEqual(expected)

  expected = 0.5
  received = em(fontSize, 10)

  expect(received).toEqual(expected)
})

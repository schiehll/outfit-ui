import colors from '../config/colors'
import sizes from '../config/sizes'
import types from '../config/types'
import removeInvalidProps from './removeInvalidProps'

const invalidProps = colors.concat(sizes).concat(types)

test('should remove the invalid props from the given object', () => {
  let props = {primary: true, href: '#'}
  let expected = {href: '#'}
  let received = removeInvalidProps(props)

  expect(received).toEqual(expected)

  props = {}
  invalidProps.forEach(invalidProp => {
    props[invalidProp] = invalidProp
  })

  expected = {}
  received = removeInvalidProps(props)

  expect(received).toEqual(expected)
})

import Color from 'color'

const textColor = (bg, {text, invertedText}) => {
  const bgColor = new Color(bg)
  return bgColor.light() ? text : invertedText
}

const activeColor = color => {
  const newColor = new Color(color)
  return newColor.darken(0.4).hexString()
}

const hoverColor = color => {
  const newColor = new Color(color)
  return newColor.darken(0.2).hexString()
}

export {
  textColor,
  activeColor,
  hoverColor
}

const smallFont = fontSize => {
  return Math.round(fontSize - (fontSize * 25 / 100))
}

const bigFont = fontSize => {
  return Math.round(fontSize + (fontSize * 25 / 100))
}

export {smallFont, bigFont}

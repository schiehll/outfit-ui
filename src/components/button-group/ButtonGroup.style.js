const style = ({sizes}) => `
  .default,
  .outline,
  .round,
  .block {
    display: inline-block;
  }

  .default > button,
  .outline > button,
  .round > button,
  .block > button {
    border-radius: 0;
  }

  .default > button:first-child,
  .outline > button:first-child,
  .block > button:first-child {
    border-radius: ${sizes.borderRadius}px 0 0 ${sizes.borderRadius}px;
  }

  .default > button:last-child,
  .outline > button:last-child,
  .block > button:last-child {
    border-radius: 0 ${sizes.borderRadius}px ${sizes.borderRadius}px 0;
  }

  .outline > button:not(:first-child) {
    border-left: none !important;
  }

  .round > button:first-child {
    border-radius: 10em 0 0 10em;
  }

  .round > button:last-child {
    border-radius: 0 10em 10em 0;
  }

  .block {
    display: flex;
  }
`

export default style

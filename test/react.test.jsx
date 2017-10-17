import React from 'react'
import ReactDOM from 'react-dom'
import Octicon from '../lib/react'
describe('Octicon component', () => {
  test('renders the svg inside it', () => {
    const zap = require('../lib/icons/alert')
    const span = document.createElement('span')
    ReactDOM.render(<Octicon icon={zap} />, span)
    expect(span.innerHTML).toBe(`<span>${ zap.svg() }</span>`)
  })
})

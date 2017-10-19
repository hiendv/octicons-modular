import React from 'react'
import ReactDOM from 'react-dom'

describe('Octicon component', () => {
  test('renders the svg inside it', () => {
    const Octicon = require('../lib/react')
    const zap = require('../lib/icons/alert')
    const span = document.createElement('span')
    ReactDOM.render(<Octicon icon={zap} />, span)
    expect(span.innerHTML).toBe(`<span>${ zap.svg() }</span>`)
  })

  describe('element', () => {
    beforeAll(() => {
      jest.doMock('react', () => {
        return {
          default: {
            createElement (type, props, children) {
              return 'rendered'
            }
          }
        }
      })
      jest.resetModules()
    })

    afterAll(() => {
      jest.unmock('react')
      jest.resetModules()
    })

    test('is rendered with React', () => {
      const Octicon = require('../lib/react')
      const zap = require('../lib/icons/alert')
      const span = document.createElement('span')
      ReactDOM.render(<Octicon icon={zap} />, span)
      expect(span.innerHTML).toBe('rendered')
    })
  })
})

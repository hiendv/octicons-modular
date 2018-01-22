import React from 'react'
import ReactDOM from 'react-dom'

describe('Octicon component', () => {
  test('renders the svg inside it', () => {
    const Octicon = require('../lib/react')
    const zap = require('../lib/icons/zap')
    const svg = document.createElement('svg')
    ReactDOM.render(<Octicon icon={zap} />, svg)
    expect(svg.innerHTML).toBe(`${ zap.svg() }`)
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
      const zap = require('../lib/icons/zap')
      const svg = document.createElement('svg')
      ReactDOM.render(<Octicon icon={zap} />, svg)
      expect(svg.innerHTML).toBe('rendered')
    })
  })
})

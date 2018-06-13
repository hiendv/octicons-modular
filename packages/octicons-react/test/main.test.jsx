import React from 'react'
import Renderer from 'react-test-renderer'
import Octicon from '../lib/main.js'

describe('Octicon component', () => {
  const zap = require('octicons-modular/lib/icons/zap')

  test('valid', () => {
    const component = Renderer.create(
      <Octicon icon={zap} />
    )

    let tree = component.toJSON()
    expect(tree).toMatchSnapshot()
  })

  test('scalable', () => {
    const component = Renderer.create(
      <Octicon icon={zap} scale={2} />
    )

    let tree = component.toJSON()
    expect(tree).toMatchSnapshot()
  })

  test('scalable with 0', () => {
    const component = Renderer.create(
      <Octicon icon={zap} scale={0} />
    )

    let tree = component.toJSON()
    expect(tree).toMatchSnapshot()
  })

  test('scalable with fractional values', () => {
    const component = Renderer.create(
      <Octicon icon={zap} scale={1.2345} />
    )

    let tree = component.toJSON()
    expect(tree).toMatchSnapshot()
  })

  test('accepts an additional class', () => {
    const component = Renderer.create(
      <Octicon icon={zap} className="an-additional-class" />
    )

    let tree = component.toJSON()
    expect(tree).toMatchSnapshot()
  })

  test('ignores invalid additional classes', () => {
    const component = Renderer.create(
      <Octicon icon={zap} className={null} />
    )

    let tree = component.toJSON()
    expect(tree).toMatchSnapshot()
  })

  test('accepts an label', () => {
    const component = Renderer.create(
      <Octicon icon={zap} label="a label" />
    )

    let tree = component.toJSON()
    expect(tree).toMatchSnapshot()
  })
})
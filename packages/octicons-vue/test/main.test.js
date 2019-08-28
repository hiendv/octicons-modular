import { mount } from '@vue/test-utils'
const { Octicon, zap } = require('../lib/main.js')

describe('Octicon component', () => {
  test('invalid', () => {
    const wrapper = mount(Octicon, {
      context: {
        props: {
          icon: {
            attrs () {},
            path () {}
          }
        }
      }
    })

    expect(wrapper.html()).toMatchSnapshot()
  })

  test('valid', () => {
    const wrapper = mount(Octicon, {
      context: {
        props: { icon: zap }
      }
    })

    expect(wrapper.html()).toMatchSnapshot()
  })

  test('scalable', () => {
    const wrapper = mount(Octicon, {
      context: {
        props: { icon: zap, scale: 2 }
      }
    })

    expect(wrapper.html()).toMatchSnapshot()
  })

  test('scalable with 0', () => {
    const wrapper = mount(Octicon, {
      context: {
        props: { icon: zap, scale: 0 }
      }
    })

    expect(wrapper.html()).toMatchSnapshot()
  })

  test('scalable with fractional values', () => {
    const wrapper = mount(Octicon, {
      context: {
        props: { icon: zap, scale: 1.2345 }
      }
    })

    expect(wrapper.html()).toMatchSnapshot()
  })

  test('accepts an additional class', () => {
    const wrapper = mount(Octicon, {
      context: {
        props: { icon: zap, className: 'an-additional-class' }
      }
    })

    expect(wrapper.html()).toMatchSnapshot()
  })

  test('ignores invalid additional classes', () => {
    const wrapper = mount(Octicon, {
      context: {
        props: { icon: zap, className: null }
      }
    })

    expect(wrapper.html()).toMatchSnapshot()
  })

  test('accepts an label', () => {
    const wrapper = mount(Octicon, {
      context: {
        props: { icon: zap, label: 'label' }
      }
    })

    expect(wrapper.html()).toMatchSnapshot()
  })
})

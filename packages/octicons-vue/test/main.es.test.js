import { mount } from '@vue/test-utils'
import Octicon from '../es/main.js'

describe('Octicon component', () => {
  const icon = require('octicons-modular/lib/icons/zap')

  test('invalid', () => {
    const wrapper = mount(Octicon, {
      context: {
        props: { icon: {
          attrs () {},
          path () {}
        } }
      }
    })

    expect(wrapper.html()).toMatchSnapshot()
  })

  test('valid', () => {
    const wrapper = mount(Octicon, {
      context: {
        props: { icon }
      }
    })

    expect(wrapper.html()).toMatchSnapshot()
  })

  test('scalable', () => {
    const wrapper = mount(Octicon, {
      context: {
        props: { icon, scale: 2 }
      }
    })

    expect(wrapper.html()).toMatchSnapshot()
  })

  test('scalable with 0', () => {
    const wrapper = mount(Octicon, {
      context: {
        props: { icon, scale: 0 }
      }
    })

    expect(wrapper.html()).toMatchSnapshot()
  })

  test('scalable with fractional values', () => {
    const wrapper = mount(Octicon, {
      context: {
        props: { icon, scale: 1.2345 }
      }
    })

    expect(wrapper.html()).toMatchSnapshot()
  })

  test('accepts an additional class', () => {
    const wrapper = mount(Octicon, {
      context: {
        props: { icon, className: 'an-additional-class' }
      }
    })

    expect(wrapper.html()).toMatchSnapshot()
  })

  test('ignores invalid additional classes', () => {
    const wrapper = mount(Octicon, {
      context: {
        props: { icon, className: null }
      }
    })

    expect(wrapper.html()).toMatchSnapshot()
  })

  test('accepts an label', () => {
    const wrapper = mount(Octicon, {
      context: {
        props: { icon, label: 'label' }
      }
    })

    expect(wrapper.html()).toMatchSnapshot()
  })
})

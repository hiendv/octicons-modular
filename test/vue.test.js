import { shallow } from '@vue/test-utils'

describe('Octicon component', () => {
  test('renders the svg inside it', () => {
    const Octicon = require('../lib/vue')
    const zap = require('../lib/icons/zap')
    const wrapper = shallow(Octicon, {
      attachToDocument: true,
      propsData: { icon: zap }
    })

    expect(wrapper.html()).toBe(zap.svg())
  })

  test(`doesn't renders the svg inside it without the icon`, () => {
  })
})

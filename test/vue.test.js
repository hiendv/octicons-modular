import { shallow } from 'vue-test-utils'

describe('Octicon component', () => {
  test('renders the svg inside it', () => {
    const Octicon = require('../lib/vue')
    const zap = require('../lib/icons/zap')
    const wrapper = shallow(Octicon, {
      propsData: { icon: zap }
    })

    expect(wrapper.contains('svg')).toBe(true)
    expect(wrapper.html()).toBe(`<span>${zap.svg()}</span>`)
  })

  test(`doesn't renders the svg inside it without the icon`, () => {
    const Octicon = require('../lib/vue')
    const wrapper = shallow(Octicon)

    expect(wrapper.contains('svg')).toBe(false)
  })
})

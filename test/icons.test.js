import { icons, default as octicons } from './fixtures/icons'

icons.forEach(name => {
  describe(name, () => {
    const icon = require(`../lib/icons/${name}.js`)
    const octicon = octicons[name]

    test(`is a valid octicon`, () => {
      expect(icon).toEqual(expect.objectContaining({
        name,
        svg: expect.any(Function)
      }))
    })

    describe('svg', () => {
      test(`returns a svg`, () => {
        expect(icon.svg()).toBe(`<svg version="1.1" width="${octicon.width}" height="${octicon.height}" viewBox="0 0 ${octicon.width} ${octicon.height}" class="octicon octicon-${name}" aria-hidden="true" >${octicon.path}</svg>`)
      })

      test('returns a svg which scales', () => {
        const { width, height } = octicon
        const scale = 2

        expect(icon.svg({ scale })).toBe(`<svg version="1.1" width="${width * scale}" height="${height * scale}" viewBox="0 0 ${octicon.width} ${octicon.height}" class="octicon octicon-${name}" aria-hidden="true" >${octicon.path}</svg>`)
      })

      test(`returns a svg which scales to 0`, () => {
        expect(icon.svg({ scale: 0 })).toBe(`<svg version="1.1" width="0" height="0" viewBox="0 0 ${octicon.width} ${octicon.height}" class="octicon octicon-${name}" aria-hidden="true" >${octicon.path}</svg>`)
      })

      test(`returns a svg which scales to 1 with invalid parameter`, () => {
        expect(icon.svg({ scale: 'invalid integer' })).toBe(`<svg version="1.1" width="${octicon.width}" height="${octicon.height}" viewBox="0 0 ${octicon.width} ${octicon.height}" class="octicon octicon-${name}" aria-hidden="true" >${octicon.path}</svg>`)
      })

      test('returns a svg which scales to a fractional value', () => {
        const { width, height } = octicon
        const scale = 1.2345
        const actualWidth = Number((width * scale).toFixed(2))
        const actualHeight = Number((height * scale).toFixed(2))

        expect(icon.svg({ scale })).toBe(`<svg version="1.1" width="${actualWidth}" height="${actualHeight}" viewBox="0 0 ${octicon.width} ${octicon.height}" class="octicon octicon-${name}" aria-hidden="true" >${octicon.path}</svg>`)
      })

      test('returns a svg which scales to a fractional number', () => {
        expect(watch.svg({ scale: 1.2345 })).toBe('<svg version="1.1" width="14.81" height="19.75" viewBox="0 0 12 16" class="octicon octicon-watch" aria-hidden="true" ><path fill-rule="evenodd" d="M6 8h2v1H5V5h1v3zm6 0c0 2.22-1.2 4.16-3 5.19V15c0 .55-.45 1-1 1H4c-.55 0-1-.45-1-1v-1.81C1.2 12.16 0 10.22 0 8s1.2-4.16 3-5.19V1c0-.55.45-1 1-1h4c.55 0 1 .45 1 1v1.81c1.8 1.03 3 2.97 3 5.19zm-1 0c0-2.77-2.23-5-5-5S1 5.23 1 8s2.23 5 5 5 5-2.23 5-5z"/></svg>')
      })

      test(`returns a svg with an addional class`, () => {
        const additionalClass = 'an-additional-class'

        expect(icon.svg({ class: additionalClass })).toBe(`<svg version="1.1" width="${octicon.width}" height="${octicon.height}" viewBox="0 0 ${octicon.width} ${octicon.height}" class="octicon octicon-${name} ${additionalClass}" aria-hidden="true" >${octicon.path}</svg>`)
      })

      test(`returns a svg with the aria-label attribute`, () => {
        const ariaLabel = 'a label'

        expect(icon.svg({ 'aria-label': ariaLabel })).toBe(`<svg version="1.1" width="${octicon.width}" height="${octicon.height}" viewBox="0 0 ${octicon.width} ${octicon.height}" class="octicon octicon-${name}" aria-label="${ariaLabel}" role="img" >${octicon.path}</svg>`)
      })
    })
  })
})

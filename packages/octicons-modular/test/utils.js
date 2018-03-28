const t = octicon => {
  const data = octicon.data
  describe('Octicon', () => {
    test(`valid`, () => {
      expect(octicon).toEqual(expect.objectContaining({
        name: octicon.name,
        svg: expect.any(Function)
      }))
    })

    describe(`.svg(options)`, () => {
      test(`returns an SVG without any options`, () => {
        expect(typeof octicon.svg()).toBe('string')
        expect(octicon.svg()).toBe(`<svg version="1.1" width="${data.width}" height="${data.height}" viewBox="0 0 ${data.width} ${data.height}" class="octicon octicon-${octicon.name}" aria-hidden="true">${data.path}</svg>`)
      })

      test(`returns an SVG which scales`, () => {
        const { width, height } = data
        const scale = 2
        expect(octicon.svg({ scale })).toBe(`<svg version="1.1" width="${width * scale}" height="${height * scale}" viewBox="0 0 ${data.width} ${data.height}" class="octicon octicon-${octicon.name}" aria-hidden="true">${data.path}</svg>`)
      })

      test(`returns an SVG which scales to 0`, () => {
        expect(octicon.svg({ scale: 0 })).toBe(`<svg version="1.1" width="0" height="0" viewBox="0 0 ${data.width} ${data.height}" class="octicon octicon-${octicon.name}" aria-hidden="true">${data.path}</svg>`)
      })

      test(`returns an SVG which scales to 1 with an invalid option`, () => {
        expect(octicon.svg({ scale: 'invalid integer' })).toBe(`<svg version="1.1" width="${data.width}" height="${data.height}" viewBox="0 0 ${data.width} ${data.height}" class="octicon octicon-${octicon.name}" aria-hidden="true">${data.path}</svg>`)
      })

      test('returns an SVG which scales to a fractional value', () => {
        const { width, height } = data
        const scale = 1.2345
        const actualWidth = Number((width * scale).toFixed(2))
        const actualHeight = Number((height * scale).toFixed(2))
        expect(octicon.svg({ scale })).toBe(`<svg version="1.1" width="${actualWidth}" height="${actualHeight}" viewBox="0 0 ${data.width} ${data.height}" class="octicon octicon-${octicon.name}" aria-hidden="true">${data.path}</svg>`)
      })

      test(`returns an SVG with an addional class`, () => {
        const additionalClass = 'an-additional-class'
        expect(octicon.svg({ class: additionalClass })).toBe(`<svg version="1.1" width="${data.width}" height="${data.height}" viewBox="0 0 ${data.width} ${data.height}" class="octicon octicon-${octicon.name} ${additionalClass}" aria-hidden="true">${data.path}</svg>`)
      })

      test(`returns an SVG with the aria-label attribute`, () => {
        const ariaLabel = 'a label'
        expect(octicon.svg({ label: ariaLabel })).toBe(`<svg version="1.1" width="${data.width}" height="${data.height}" viewBox="0 0 ${data.width} ${data.height}" class="octicon octicon-${octicon.name}" aria-label="${ariaLabel}" role="img">${data.path}</svg>`)
      })
    })
  })
}

export { t }
export default { t }

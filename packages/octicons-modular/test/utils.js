const getAttrs = element => {
  return Array.from(element.attributes).reduce((o, item) => {
    o[item.name] = item.value
    return o
  }, {})
}

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
        let svg = octicon.svg()
        expect(svg instanceof global.SVGSVGElement).toBeTruthy()

        let attrs = getAttrs(svg)
        expect(attrs).toMatchObject({
          width: `${data.width}`,
          height: `${data.height}`,
          viewBox: `0 0 ${data.width} ${data.height}`,
          class: `octicon octicon-${octicon.name}`,
          'aria-hidden': 'true'
        })
      })

      test(`returns an SVG which scales`, () => {
        const scale = 2
        let svg = octicon.svg({scale})
        expect(svg instanceof global.SVGSVGElement).toBeTruthy()

        let attrs = getAttrs(svg)
        expect(attrs).toMatchObject({
          width: `${data.width * scale}`,
          height: `${data.height * scale}`,
          viewBox: `0 0 ${data.width} ${data.height}`,
          class: `octicon octicon-${octicon.name}`,
          'aria-hidden': 'true'
        })
      })

      test(`returns an SVG which scales with 0`, () => {
        let svg = octicon.svg({scale: 0})
        expect(svg instanceof global.SVGSVGElement).toBeTruthy()

        let attrs = getAttrs(svg)
        expect(attrs).toMatchObject({
          width: '0',
          height: '0',
          viewBox: `0 0 ${data.width} ${data.height}`,
          class: `octicon octicon-${octicon.name}`,
          'aria-hidden': 'true'
        })
      })

      test(`returns an SVG which scales with invalid parameters`, () => {
        let svg = octicon.svg({scale: 'invalid integer'})
        expect(svg instanceof global.SVGSVGElement).toBeTruthy()

        let attrs = getAttrs(svg)
        expect(attrs).toMatchObject({
          width: `${data.width}`,
          height: `${data.height}`,
          viewBox: `0 0 ${data.width} ${data.height}`,
          class: `octicon octicon-${octicon.name}`,
          'aria-hidden': 'true'
        })
      })

      test('returns an SVG which scales with a fractional value', () => {
        const scale = 1.2345
        const actualWidth = Number((data.width * scale).toFixed(2))
        const actualHeight = Number((data.height * scale).toFixed(2))
        let svg = octicon.svg({scale})
        expect(svg instanceof global.SVGSVGElement).toBeTruthy()

        let attrs = getAttrs(svg)
        expect(attrs).toMatchObject({
          width: `${actualWidth}`,
          height: `${actualHeight}`,
          viewBox: `0 0 ${data.width} ${data.height}`,
          class: `octicon octicon-${octicon.name}`,
          'aria-hidden': 'true'
        })
      })

      test(`returns an SVG with an additional class`, () => {
        const additionalClass = 'an-additional-class'
        let svg = octicon.svg({ class: additionalClass })
        expect(svg instanceof global.SVGSVGElement).toBeTruthy()

        let attrs = getAttrs(svg)
        expect(attrs).toMatchObject({
          width: `${data.width}`,
          height: `${data.height}`,
          viewBox: `0 0 ${data.width} ${data.height}`,
          class: `octicon octicon-${octicon.name} ${additionalClass}`,
          'aria-hidden': 'true'
        })
      })

      test(`returns an SVG with an invalid class`, () => {
        const additionalClass = null
        let svg = octicon.svg({ class: additionalClass })
        expect(svg instanceof global.SVGSVGElement).toBeTruthy()

        let attrs = getAttrs(svg)
        expect(attrs).toMatchObject({
          width: `${data.width}`,
          height: `${data.height}`,
          viewBox: `0 0 ${data.width} ${data.height}`,
          class: `octicon octicon-${octicon.name}`,
          'aria-hidden': 'true'
        })
      })

      test(`returns an SVG with a label`, () => {
        const label = 'a label'
        let svg = octicon.svg({ label })
        expect(svg instanceof global.SVGSVGElement).toBeTruthy()

        let attrs = getAttrs(svg)
        expect(attrs).toMatchObject({
          width: `${data.width}`,
          height: `${data.height}`,
          viewBox: `0 0 ${data.width} ${data.height}`,
          class: `octicon octicon-${octicon.name}`,
          'aria-label': label
        })
      })
    })
  })
}

export { t }
export default { t }

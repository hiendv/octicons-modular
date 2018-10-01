const t = octicon => {
  describe(`Octicon: ${octicon.name}`, () => {
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
        expect(svg).toMatchSnapshot()
      })

      test(`returns an SVG which scales`, () => {
        const scale = 2
        let svg = octicon.svg({ scale })
        expect(svg instanceof global.SVGSVGElement).toBeTruthy()
        expect(svg).toMatchSnapshot()
      })

      test(`returns an SVG which scales with 0`, () => {
        let svg = octicon.svg({ scale: 0 })
        expect(svg instanceof global.SVGSVGElement).toBeTruthy()
        expect(svg).toMatchSnapshot()
      })

      test(`returns an SVG which scales with invalid parameters`, () => {
        let svg = octicon.svg({ scale: 'invalid integer' })
        expect(svg instanceof global.SVGSVGElement).toBeTruthy()
        expect(svg).toMatchSnapshot()
      })

      test('returns an SVG which scales with a fractional value', () => {
        const scale = 1.2345
        let svg = octicon.svg({ scale })
        expect(svg instanceof global.SVGSVGElement).toBeTruthy()
        expect(svg).toMatchSnapshot()
      })

      test(`returns an SVG with an additional class`, () => {
        const additionalClass = 'an-additional-class'
        let svg = octicon.svg({ class: additionalClass })
        expect(svg instanceof global.SVGSVGElement).toBeTruthy()
        expect(svg).toMatchSnapshot()
      })

      test(`returns an SVG with an invalid class`, () => {
        const additionalClass = null
        let svg = octicon.svg({ class: additionalClass })
        expect(svg instanceof global.SVGSVGElement).toBeTruthy()
        expect(svg).toMatchSnapshot()
      })

      test(`returns an SVG with a label`, () => {
        const label = 'a label'
        let svg = octicon.svg({ label })
        expect(svg instanceof global.SVGSVGElement).toBeTruthy()
        expect(svg).toMatchSnapshot()
      })
    })
  })
}

export { t }
export default { t }

const t = octicon => {
  describe(`Octicon: ${octicon.name}`, () => {
    test(`valid`, () => {
      expect(octicon).toEqual(expect.objectContaining({
        name: octicon.name,
        attrs: expect.any(Function),
        html: expect.any(Function)
      }))
    })

    describe(`.html(options)`, () => {
      test(`returns an SVG without any options`, () => {
        expect(octicon.html()).toMatchSnapshot()
      })

      test(`return an SVG with invalid options`, () => {
        expect(octicon.html(JSON.parse(`{"__proto__":{"oops":"It works !"}}`))).toMatchSnapshot()
      })

      test(`returns an SVG which scales`, () => {
        expect(octicon.html({ scale: 2 })).toMatchSnapshot()
      })

      test(`returns an SVG which scales with 0`, () => {
        expect(octicon.html({ scale: 0 })).toMatchSnapshot()
      })

      test(`returns an SVG which scales with invalid parameters`, () => {
        expect(octicon.html({ scale: 'invalid integer' })).toMatchSnapshot()
      })

      test('returns an SVG which scales with a fractional value', () => {
        expect(octicon.html({ scale: 1.2345 })).toMatchSnapshot()
      })

      test(`returns an SVG with an additional class`, () => {
        expect(octicon.html({ class: 'an-additional-class' })).toMatchSnapshot()
      })

      test(`returns an SVG with an invalid class`, () => {
        expect(octicon.html({ class: null })).toMatchSnapshot()
      })

      test(`returns an SVG with a label`, () => {
        expect(octicon.html({ label: 'a label' })).toMatchSnapshot()
      })
    })

    describe(`.keywords`, () => {
      test(`returns keywords`, () => {
        expect(octicon.keywords()).toMatchSnapshot()
      })
    })
  })
}

export { t }
export default { t }

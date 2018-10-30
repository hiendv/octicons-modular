const assign = (t, ...sources) => {
  for (var s, i = 0, n = sources.length; i < n; i++) {
    s = sources[i]
    Object.keys(s).forEach(p => {
      if (p === '__proto__') {
        return
      }

      t[p] = s[p]
    })
  }

  return t
}

export { assign }

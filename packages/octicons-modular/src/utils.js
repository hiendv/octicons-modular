const assign = (t, ...sources) => {
  for (var s, i = 0, n = sources.length; i < n; i++) {
    s = sources[i]
    for (var p in s) {
      if (!Object.prototype.hasOwnProperty.call(s, p)) {
        continue
      }

      t[p] = s[p]
    }
  }
  return t
}

export { assign }

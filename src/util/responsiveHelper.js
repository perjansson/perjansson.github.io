const RESPONSIVE_FACTOR = 1.3

export const generateSizes = size =>
  Array.from(Array(4)).map(
    (_v, i) => size * Math.max(1, i * RESPONSIVE_FACTOR - i + 1)
  )

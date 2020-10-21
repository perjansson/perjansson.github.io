const RESPONSIVE_FACTOR = 1.3

export const generateSizes = (size, factor = RESPONSIVE_FACTOR) =>
  Array.from(Array(4)).map((_v, i) => size * Math.max(1, i * factor - i + 1))

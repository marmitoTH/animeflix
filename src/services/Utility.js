class Utility {
  static filterPercentage(from) {
    if (from) {
      return from.match(/^\d{2}/i)
    }
  }

  static filterYear(from) {
    if (from) {
      return from.match(/^\d{4}/i)
    }
  }

  static trimParagraph(from, maxSize = 165, suffix = ' [...]') {
    if (from && from.length > maxSize) {
      from = from.substring(0, maxSize)
      from = from.substring(0, Math.min(from.length, from.lastIndexOf(' ')))
      from += suffix
    }

    return from
  }
}

export default Utility

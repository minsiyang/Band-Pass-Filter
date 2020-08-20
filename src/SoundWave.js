class Soundwave {

  bandPassFilter(frequencies, lowFilter = 40, highFilter = 1000) {

    for (let i = 0; i < frequencies.length; i++) {
      if (frequencies[i] < lowFilter) {
        frequencies[i] = lowFilter
      } else if (frequencies[i] > highFilter) {
        frequencies[i] = highFilter
      }
    }
    return frequencies
  }
}
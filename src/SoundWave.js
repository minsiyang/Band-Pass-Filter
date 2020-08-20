class Soundwave {
  // constructor() {
  //   this.filteredResult = []
  // }
  bandPassFilter(frequencies, lowFilter = 40, highFilter) {

    for (let i = 0; i < frequencies.length; i++) {
      if (frequencies[i] < lowFilter) {
        frequencies[i] = lowFilter;
        //  this.filteredResult.push(frequencies[i])
      }
    }
    return frequencies
  }
}
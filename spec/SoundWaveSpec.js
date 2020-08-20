describe('Soundwave', function() {
  it('should replace frequency 10 to frequency 40', function() {
    let soundwave = new Soundwave()
    expect(soundwave.bandPassFilter([10], 40, 1000)).toEqual([40])
  })

  it('should replace frequency [10, 10] to frequency [40, 40]', function() {
    let soundwave = new Soundwave()
    console.log(soundwave.bandPassFilter([10, 10], 40, 1000))
    expect(soundwave.bandPassFilter([10, 10], 40, 1000)).toEqual([40, 40])
  })
})
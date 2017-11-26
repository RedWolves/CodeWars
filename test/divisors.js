let assert = require('assert')
let divisors = require('../kata/divisors/divisors')

describe.only("divisors", function () {
  it('should only expect a positive number', function () {
    assert.equal(divisors(-1), false)
  })
  it('12 should return [2,3,4,6]', function () {
    assert.deepEqual(divisors(12), [2,3,4,6])
  })
  it('15 should return [3,5]', function () {
    assert.deepEqual(divisors(15), [3,5])
  })
  it('25 should return [5]', function () {
    assert.deepEqual(divisors(25), [5])
  })
  it('13 is a prime number, acknowledge it', function () {
    assert.deepEqual(divisors(13), '13 is prime')
  })
})
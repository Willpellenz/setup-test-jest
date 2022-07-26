const sum = require('../sum');

test('the sum should return 2', function () {
    expect(sum(1, 1)).toBe(2)
})

test('the sum should return 3', function () {
    expect(sum(1, 2)).toBe(3)
})
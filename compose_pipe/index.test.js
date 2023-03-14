const { compose, pipe } = require('./index');

function addTwo(a) {
  return a + 2
}

function multiplyByThree(a) {
  return a * 3
}

function divideByTwo(a) {
  return a / 2
}


describe('compose', () => {
  test('exists', () => expect(compose).toBeDefined());
  test('to work', () => { 
    const composed = compose(addTwo, multiplyByThree, divideByTwo)
    expect(composed(4)).toBe(8)
    expect(composed(10)).toBe(17)
  })
});

describe('pipe', () => {
  test('exists', () => expect(pipe).toBeDefined());
  test('to work', () => { 
    const piped = pipe(addTwo, multiplyByThree, divideByTwo)
    expect(piped(4)).toBe(9)
    expect(piped(10)).toBe(18)
  })
});

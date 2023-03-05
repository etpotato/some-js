const {Atm} = require('./index');

const limits = {
  '5000': 4,
  '1000': 5,
  '500': 2,
  '100': 5,
  '50': 100,
  '30': 23
}

describe('atm', () => {
  test('exists', () => expect(new Atm({})).toBeDefined());
  test('has get method', () => expect(new Atm({}).get).toBeDefined());
  
  test('throws when asked amount is invalid', () => {
    expect(() => new Atm(limits).get(10)).toThrow();
    expect(() => new Atm(limits).get(90)).toThrow();
    expect(() => new Atm(limits).get(5003)).toThrow();
    expect(() => new Atm(limits).get(3139)).toThrow();
    expect(() => new Atm(limits).get(10520)).toThrow();
  });

  test('logs on successful withdrawal', () => {
    expect(new Atm(limits).get(1000)).toBe('1000x1');
    expect(new Atm(limits).get(12550)).toBe('5000x2, 1000x2, 500x1, 50x1');
    expect(new Atm(limits).get(180)).toBe('100x1, 50x1, 30x1');
    expect(new Atm(limits).get(25900)).toBe('5000x4, 1000x5, 500x1, 100x4');
    expect(new Atm(limits).get(30000)).toBe('5000x4, 1000x5, 500x2, 100x5, 50x70');
  });

  test('throws if can\'t give particular amount', () => {
    expect(() => new Atm(limits).get(40000)).toThrow();
    expect(() => new Atm(limits).get(55900)).toThrow();
  });

  test('can save state', () => {
    expect(() => {
      const atm = new Atm(limits)
      atm.get(30000)
      atm.get(5000)
    }).toThrow();

    (() => {
      const atm = new Atm(limits)
      expect(atm.get(20000)).toBe('5000x4')
      expect(atm.get(6000)).toBe('1000x5, 500x2')
      expect(atm.get(1000)).toBe('100x5, 50x10')
      expect(() => atm.get(6000)).toThrow()
    })();
  });
});

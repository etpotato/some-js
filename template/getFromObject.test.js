const getFromObject = require('./getFromObject.js');

const obj = {
  user: {
    name: 'John',
    experience: 0,
    recommendations: '',
  },
};

describe('get value from object', () => {
  test('Can return object', () => {
    expect(getFromObject({ obj, path: 'user' })).toEqual({ name: 'John', experience: 0, recommendations: ''});
  });
  test('Can return value', () => {
    expect(getFromObject({ obj, path: 'user.name' })).toBe('John');
  });
  test('Can return falsy value', () => {
    expect(getFromObject({ obj, path: 'user.experience' })).toBe(0);
    expect(getFromObject({ obj, path: 'user.recommendations' })).toBe('');
  });
  test('Can return indefined', () => {
    expect(getFromObject({ path: 'user' })).toEqual(undefined);
    expect(getFromObject({ obj })).toEqual(undefined);
    expect(getFromObject({ obj, path: '' })).toEqual(undefined);
    expect(getFromObject({ obj, path: 'user.name.prop' })).toBe(undefined);
    expect(getFromObject({ obj, path: 'user.experience.prop' })).toBe(undefined);
    expect(getFromObject({ obj, path: 'admin' })).toBe(undefined);
  });
});

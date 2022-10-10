const encode = require('./index');

const basicStart = 'ABBBCC';
const basicEnd = 'AABBBC';
const short = 'A';
const long = 'AAAAAJJJJJJJSSSDBBBC';

describe('encode', () => {
  test('basicStart', () => expect(encode(basicStart)).toBe('AB3C2'));
  test('basicEnd', () => expect(encode(basicEnd)).toBe('A2B3C'));
  test('short', () => expect(encode(short)).toBe('A'));
  test('long', () => expect(encode(long)).toBe('A5J7S3DB3C'));
});

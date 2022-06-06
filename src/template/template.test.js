const template = require('./template');

const data = {
  user: {
    name: 'John',
    family: {
      mom: 'Sara',
    },
  },
  date: 'june 6',
  time: '09:00',
};

describe('Parse template', () => {
  test('Base case', () => {
    expect(template({
      text: 'Hello {user.name}. The time is {date} {time}. My mom\'s name is {user.family.mom}', data,
    })).toBe('Hello John. The time is june 6 09:00. My mom\'s name is Sara');
  });

  test('Insert empty string if no data', () => {
    expect(template({
      text: 'Hi dad {user.dad}!',
      data,
    })).toBe('Hi dad !');
    expect(template({
      text: 'Hi dad {user.dad.name}!',
      data,
    })).toBe('Hi dad !');
  });
});

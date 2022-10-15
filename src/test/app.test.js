import { Character } from '../app';

test('properties in app', () => {
  const received = new Character('Boo', 'Bowerman');
  const expected = {
    name: 'Boo',
    type: 'Bowerman',
    health: 100,
    level: 1,
  }
  expect(received).toEqual(expected);
});

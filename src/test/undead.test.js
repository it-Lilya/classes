import { Undead } from '../undead';

test('name in object', () => {
  const received = new Undead('William', 'Undead');
  const expected = {
    name: 'William',
    type: 'Undead',
    health: 100,
    level: 1,
    attack: 25,
    defence: 25,
  };
  expect(received).toEqual(expected);
});

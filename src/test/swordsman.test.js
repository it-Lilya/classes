import { Swordsman } from '../swordsman';

test('name in object', () => {
  const received = new Swordsman('Shone', 'Swordsman');
  const expected = {
    name: 'Shone',
    type: 'Swordsman',
    health: 100,
    level: 1,
    attack: 40,
    defence: 10,
  };
  expect(received).toEqual(expected);
});

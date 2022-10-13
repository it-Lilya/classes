import { Zombie } from '../zombie';

test('name in object', () => {
  const received = new Zombie('Zak', 'Zombie');
  const expected = {
    name: 'Zak',
    type: 'Zombie',
    health: 100,
    level: 1,
    attack: 40,
    defence: 10,
  };
  expect(received).toEqual(expected);
});

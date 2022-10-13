import { Magician } from '../magician';

test('name in object', () => {
  const received = new Magician('Maggy', 'Magician');
  const expected = {
    name: 'Maggy',
    type: 'Magician',
    health: 100,
    level: 1,
    attack: 10,
    defence: 40,
  };
  expect(received).toEqual(expected);
});

import { Deamon } from '../deamon';

test('name in object', () => {
  const received = new Deamon('Born', 'Deamon');
  const expected = {
    name: 'Born',
    type: 'Deamon',
    health: 100,
    level: 1,
    attack: 10,
    defence: 40,
  };
  expect(received).toEqual(expected);
});

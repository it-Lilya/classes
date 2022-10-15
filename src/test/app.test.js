import { Character } from '../app';

test('name in object', () => {
  const received = new Character('B', 'Bowerman');
  const expected = 'Ошибка в name'
  expect(received).toEqual(expected);
});

test('type in object', () => {
  const received = new Character('Boo', 'bowerman');
  const expected = 'Ошибка в types'
  expect(received).toEqual(expected);
})
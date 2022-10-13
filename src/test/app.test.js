import { Character } from '../app';

test('name in object', () => {
  const obj = new Character('Bobik');
  const received = obj.name;
  let expected;
  if (received.length > 2 && received.length < 10) {
    return expected;
  }
  expect(received).toEqual(expected);
});

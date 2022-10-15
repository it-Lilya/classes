import { Character } from '../app';

test('name in app', () => {
  try {
    new Character('B', 'Bowerman');
  } catch(err) {
    expect(err.message).toBe('Ошибка в name')
  }
}
)

test('type in app', () => {
  try {
    new Character('Boo', 'bowerman');
  } catch(err) {
    expect(err.message).toBe('Ошибка в type')
  }
}
)
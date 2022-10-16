export class Character {
  constructor(name, type) {
    const types = ['Bowerman', 'Deamon', 'Magician', 'Swordsman', 'Undead', 'Zombie'];

    if(name.length < 2 || name.length > 100 || typeof (name) !== 'string') {
      return new Error('Ошибка в name');
    } else {
      this.name = name;
    }

    if(!types.includes(type)) {
      return new Error('Ошибка в type');
    } else {
      this.type = type;
    }

    this.health = 100;
    this.level = 1;
  }
}

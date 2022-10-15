export class Character {
  constructor(name, type) {
    const types = ['Bowerman', 'Deamon', 'Magician', 'Swordsman', 'Undead', 'Zombie'];

    if(name.length < 2 || name.length > 100 || typeof (name) !== 'string') {
      const err = new Error('Ошибка в name');
      return err;
    } else {
      this.name = name;
    }

    if(!types.includes(type)) {
      const err = new Error('Ошибка в type');
      return err;
    } else {
      this.type = type;
    }

    this.health = 100;
    this.level = 1;
  }
}

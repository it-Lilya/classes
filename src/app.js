export class Character {
  constructor(name, type) {
    let types = ['Bowerman', 'Deamon', 'Magician', 'Swordsman', 'Undead', 'Zombie'];

     if(name.length < 2 || name.length > 100 || typeof (name) !== 'string') {
      throw new Error('Ошибка в name');
    } else {
      this.name = name;
    }

    if(!types.includes(type)) {
      throw new Error('Ошибка в types');
    } else {
      this.type = type;
    }

    this.health = 100;
    this.level = 1;
  }
}

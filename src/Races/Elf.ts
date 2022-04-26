import Race from './Race';

class Elf extends Race {
  private _lifeElf = 99;
  static _counterElf = 0;

  get maxLifePoints(): number {
    return this._lifeElf; 
  }

  static createdRacesInstances(): number {
    this._counterElf += 1;
    return this._counterElf;
  }
}

export default Elf;
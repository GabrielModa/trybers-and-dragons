import Race from './Race';

class Orc extends Race {
  private _lifeOrc = 74;
  static _counterOrc = 0;

  get maxLifePoints(): number {
    return this._lifeOrc; 
  }

  static createdRacesInstances() {    
    this._counterOrc += 1;
    return this._counterOrc;
  }
}

export default Orc;
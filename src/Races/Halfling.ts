import Race from './Race';

class Halfling extends Race {
  private _lifeHalfling = 60;
  static _counterHalfing = 0;

  get maxLifePoints(): number {
    return this._lifeHalfling; 
  }

  static createdRacesInstances() {    
    this._counterHalfing += 1;
    return this._counterHalfing;
  }
}

export default Halfling;
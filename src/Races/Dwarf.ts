import Race from './Race';

class Dwarf extends Race {
  private _lifeDwarf = 80;
  static _counterDwarf = 0;
    
  get maxLifePoints(): number {
    return this._lifeDwarf; 
  }

  static createdRacesInstances() {    
    this._counterDwarf += 1;
    return this._counterDwarf;
  }
}

export default Dwarf;
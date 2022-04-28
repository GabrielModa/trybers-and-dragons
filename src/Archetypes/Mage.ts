import { EnergyType } from '../Energy';
import Archetype from './Archetype';

class Mage extends Archetype {
  static _counterMage = 0;
  private _energyType: EnergyType = 'mana';
  
  public get energyType(): EnergyType {
    return this._energyType;
  }
    
  static createdArchetypeInstances() {    
    this._counterMage += 1;
    return this._counterMage;
  }
}

export default Mage;
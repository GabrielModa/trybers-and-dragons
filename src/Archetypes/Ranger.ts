import { EnergyType } from '../Energy';
import Archetype from './Archetype';

class Ranger extends Archetype {
  static counterRanger = 0;
  private _energyType: EnergyType = 'stamina';
  
  public get energyType(): EnergyType {
    return this._energyType;
  }

  static createdArchetypeInstances() {    
    this.counterRanger += 1;
    return this.counterRanger;
  }
}

export default Ranger;
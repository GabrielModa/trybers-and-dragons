import { EnergyType } from '../Energy';
import Archetype from './Archetype';

class Warrior extends Archetype {
  static counterWarrior = 0;
  private _energyType: EnergyType = 'stamina';

  public get energyType(): EnergyType {
    return this._energyType;
  }

  static createdArchetypeInstances() {    
    this.counterWarrior += 1;
    return this.counterWarrior;
  }
}

export default Warrior;
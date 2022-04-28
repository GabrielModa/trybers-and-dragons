import { EnergyType } from '../Energy';
import Archetype from './Archetype';

class Necromancer extends Archetype {
  static counterNecromancer = 0;
  private _energyType: EnergyType = 'mana';

  public get energyType(): EnergyType {
    return this._energyType;
  }

  static createdArchetypeInstances() {    
    this.counterNecromancer += 1;
    return this.counterNecromancer;
  }
}

export default Necromancer;
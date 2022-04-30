// import Character from './Character';
import SimpleFighter from './Fighter/SimpleFighter';

class Monster implements SimpleFighter {
  constructor(
    private _lifePoints = 85,
    private _strength = 63,
  ) { }
  
  public get lifePoints() : number {
    return this._lifePoints;
  }

  public get strength() : number {
    return this._strength;
  }
  
  receiveDamage(attackPoints: number): number {
    const damage = attackPoints;

    if (damage > 0) {
      this._lifePoints -= damage; 
    }
    if (this._lifePoints < 0) {
      this._lifePoints = -1;
    }
    return this._lifePoints;
  }

  attack(enemy: SimpleFighter): void {
    enemy.receiveDamage(this.strength);
  }
}

export default Monster;
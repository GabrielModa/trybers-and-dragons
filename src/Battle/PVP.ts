import Figther from '../Fighter';
import Battle from './Battle';

class PVP extends Battle {
  protected _battle: Battle;

  constructor(
    protected player: Figther,
    protected player2: Figther,
    
  ) {    
    super(player);
    this._battle = new PVP(player, player2);
  }
  
  public get battle() : Battle {
    return this._battle;
  }
   
  fight(): number {
    return this.player.lifePoints === -1 ? -1 : 1;
  }
}
export default PVP;

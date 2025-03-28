import { GameStatus } from "./GameStatus";
import { TileState } from "./TileState";

class GameState {
  private _board: TileState[] = $state([
    TileState.Empty, TileState.Empty, TileState.Empty, 
    TileState.Empty, TileState.Empty, TileState.Empty, 
    TileState.Empty, TileState.Empty, TileState.Empty, 
    ])
  private _nextState: TileState = $state(TileState.X)
  private _gameStatus: GameStatus = $state(GameStatus.New)

  public get board(): readonly TileState[] { return this._board }
  public get gameStatus(): GameStatus { return this._gameStatus }

  public updateTile(index: number) {

    if(index < 0 || index > 8) throw new RangeError("index must be between 0 and 8")
    
    if(this._board[index] == TileState.Empty) {
      this._board[index] = this._nextState
      this._gameStatus = this.getGameOverStatus()
      this.togglePlayer()
    }
  }

  private togglePlayer() {
    if(this._nextState == TileState.X) this._nextState = TileState.O
    else this._nextState = TileState.X
  }

  public startGame() {
    this._board.fill(TileState.Empty)
    this._gameStatus = GameStatus.InGame
  }

  private getGameOverStatus(): GameStatus {

    const winningPositions = [
      [0, 1, 2],
      [3, 4, 5],
      [6, 7, 8],
      [0, 3, 6],
      [1, 4, 7],
      [2, 5, 8],
      [0, 4, 8],
      [2, 4, 6],
    ];
  
    for (const [ a, b, c ] of winningPositions) {
      if (this._board[a] !== TileState.Empty && this._board[a] === this._board[b] && this._board[a] === this._board[c]) {
        if(this._board[a] == TileState.X) return GameStatus.XWins
        else return GameStatus.OWins
      }
    }
  
    // no empty tiles left, it's a draw!
    if (!this._board.includes(TileState.Empty)) {
      return GameStatus.Draw
    }
    
    return GameStatus.InGame
  }
}

export const gameState = new GameState()

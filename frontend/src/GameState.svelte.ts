import { TileState } from "./TileState";

class GameState {
    private _board: TileState[] = $state([
        TileState.Empty, TileState.Empty, TileState.Empty, 
        TileState.Empty, TileState.Empty, TileState.Empty, 
        TileState.Empty, TileState.Empty, TileState.Empty, 
      ])
    private _nextState: TileState = $state(TileState.X)

    public get board(): readonly TileState[] { return this._board }
    public updateTile(index: number) {

        if(index < 0 || index > 8) throw new RangeError("index must be between 0 and 8")
        
        if(this._board[index] == TileState.Empty) {
            this._board[index] = this._nextState
            this.switchNextState()
        }
    }

    private switchNextState() {
        if(this._nextState == TileState.X) this._nextState = TileState.O
        else this._nextState = TileState.X
    }
}

export const gameState = new GameState()

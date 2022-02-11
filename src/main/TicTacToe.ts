export enum Player {
  PlayerX = "player-x",
  PlayerO = "player-o",
}

export enum Position {
  TopLeft,
  TopMiddle,
  TopRight,
  MiddleLeft,
  MiddleMiddle,
  MiddleRight,
  BottomLeft,
}

class PositionRepository {
  private positions: Map<Position, Player> = new Map();

  public addPosition(position: Position, player: Player) {
    if (this.positions.has(position)) {
      throw new Error(`the position ${position} has already been played`);
    }
    this.positions.set(position, player);
  }

  public getPlayerInPosition(position: Position): Player | undefined {
    return this.positions.get(position);
  }
}

export class TicTacToe {
  private whoIsNext: Player = Player.PlayerX;
  private playedMoves: PositionRepository = new PositionRepository();

  getNextPlayer(): Player {
    return this.whoIsNext;
  }

  move(position: Position): void {
    this.playedMoves.addPosition(position, this.whoIsNext);
    this.whoIsNext =
      this.whoIsNext === Player.PlayerX ? Player.PlayerO : Player.PlayerX;
  }

  getWinningPlayer(): Player | undefined {
    if (
      this.getPlayerInPosition(Position.TopRight) ===
        this.getPlayerInPosition(Position.TopMiddle) &&
      this.getPlayerInPosition(Position.TopMiddle) ===
        this.getPlayerInPosition(Position.TopLeft)
    ) {
      return this.getPlayerInPosition(Position.TopRight);
    }
  }

  private getPlayerInPosition(position: Position): Player | undefined {
    return this.playedMoves.getPlayerInPosition(position);
  }
}

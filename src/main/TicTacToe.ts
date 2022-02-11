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
}

class PositionRepository {
  private positions: Set<Position> = new Set();

  public addPosition(position: Position) {
    this.positions.add(position);
  }

  public hasPosition(position: Position): boolean {
    return this.positions.has(position);
  }
}

export class TicTacToe {
  private whoIsNext: Player = Player.PlayerX;
  private playedMoves: PositionRepository = new PositionRepository();

  getNextPlayer(): Player {
    return this.whoIsNext;
  }

  move(position: Position): void {
    if (this.playedMoves.hasPosition(position)) {
      throw new Error(`the position ${position} has already been played`);
    }

    this.playedMoves.addPosition(position);
    this.whoIsNext =
      this.whoIsNext === Player.PlayerX ? Player.PlayerO : Player.PlayerX;
  }

  getWinningPlayer(): Player | undefined {
    if (this.hasPositionBeenPlayed(Position.TopRight) && this.hasPositionBeenPlayed(Position.TopMiddle) && this.hasPositionBeenPlayed(Position.TopLeft)) {
      return Player.PlayerX;
    }
  }

  private hasPositionBeenPlayed(position: Position): boolean {
    return this.playedMoves.hasPosition(position);
  }
}

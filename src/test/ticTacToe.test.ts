enum Player {
  PlayerX = "player-x",
  PlayerO = "player-o",
}

enum Position {
  TL = 0,
}

class TicTacToe {
  private whoIsNext: Player = Player.PlayerX;

  getNextPlayer(): Player {
    return this.whoIsNext;
  }

  move(position: Position): void {
    this.whoIsNext =
      this.whoIsNext === Player.PlayerX ? Player.PlayerO : Player.PlayerX;
  }
}

describe("TicTacToe", () => {
  it.each([
    [Player.PlayerX, 0],
    [Player.PlayerO, 1],
    [Player.PlayerX, 2],
    [Player.PlayerO, 3],
  ])("should be %s get to go next after %i moves ", (nextPlayer, moveCount) => {
    const game = new TicTacToe();

    for (let index = 0; index < moveCount; index++) {
      game.move(Position.TL);
    }
    expect(game.getNextPlayer()).toEqual(nextPlayer);
  });

  it("should not be able to play in played position ", () => {
    const game = new TicTacToe();
    game.move(Position.TL);
    expect(() => game.move(Position.TL)).toThrowError();
  });
});

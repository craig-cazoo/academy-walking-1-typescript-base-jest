enum Player {
  PlayerX = "player-x",
  PlayerO = "player-o",
}

class TicTacToe {
  private hasMoved: boolean = false;

  getNextPlayer(): Player {
    return this.hasMoved ? Player.PlayerO : Player.PlayerX;
  }

  move(): void {
    this.hasMoved = true;
  }
}

describe("TicTacToe", () => {
  it("should be X to go first", () => {
    const game = new TicTacToe();
    expect(game.getNextPlayer()).toEqual(Player.PlayerX);
  });

  it("should be O to go second", () => {
    const game = new TicTacToe();
    game.move();
    expect(game.getNextPlayer()).toEqual(Player.PlayerO);
  });

  it("should be X to go third", () => {
    const game = new TicTacToe();
    game.move();
    game.move();
    expect(game.getNextPlayer()).toEqual(Player.PlayerX);
  });
});

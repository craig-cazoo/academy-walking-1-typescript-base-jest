enum Player {
  PlayerX = "player-x",
  PlayerO = "player-o",
}

class TicTacToe {
  getNextPlayer(): Player {
    return Player.PlayerX;
    throw new Error("Not implemented");
  }
  move(): void {}
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
});

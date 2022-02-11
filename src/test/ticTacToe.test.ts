import { Player, Position, TicTacToe } from "../main/TicTacToe";

describe("TicTacToe", () => {
  it.each([
    [Player.PlayerX, []],
    [Player.PlayerO, [Position.TopLeft]],
    [Player.PlayerX, [Position.TopLeft, Position.TopMiddle]],
    [Player.PlayerO, [Position.TopLeft, Position.TopMiddle, Position.TopRight]],
  ])(
    "should be %s get to go next after %i moves ",
    (nextPlayer, positions: Position[]) => {
      const game = new TicTacToe();

      for (const position of positions) {
        game.move(position);
      }

      expect(game.getNextPlayer()).toEqual(nextPlayer);
    }
  );

  it("should not be able to play in played position ", () => {
    const game = new TicTacToe();
    game.move(Position.TopLeft);
    expect(() => game.move(Position.TopLeft)).toThrowError();
  });

  it("player X should win when they have a horizontal line", () => {
    const game = new TicTacToe();

    game.move(Position.TopLeft);
    game.move(Position.MiddleLeft);
    game.move(Position.TopMiddle);
    game.move(Position.MiddleMiddle);
    game.move(Position.TopRight);

    expect(game.getWinningPlayer()).toEqual(Player.PlayerX);
  });

  it("player X should not win if missing top right", () => {
    const game = new TicTacToe();

    game.move(Position.TopLeft);
    game.move(Position.MiddleLeft);
    game.move(Position.TopMiddle);
    game.move(Position.MiddleMiddle);

    expect(game.getWinningPlayer()).toEqual(undefined);
  });

  it("player X should not win if only has played in top right", () => {
    const game = new TicTacToe();

    game.move(Position.TopRight);

    expect(game.getWinningPlayer()).toEqual(undefined);
  });

  it("player X should not win if player O is blocking X", () => {
    const game = new TicTacToe();

    game.move(Position.TopLeft);
    game.move(Position.TopMiddle);
    game.move(Position.TopRight);

    expect(game.getWinningPlayer()).toEqual(undefined);
  });

  it("player O should win when it has played in top row 3 times", () => {
    const game = new TicTacToe();

    game.move(Position.MiddleLeft);
    game.move(Position.TopLeft);
    game.move(Position.MiddleMiddle);
    game.move(Position.TopMiddle);
    game.move(Position.BottomLeft);
    game.move(Position.TopRight);

    expect(game.getWinningPlayer()).toEqual(Player.PlayerO);
  });

  it("player O should win when it has played in middle row 3 times", () => {
    const game = new TicTacToe();

    game.move(Position.TopMiddle);
    game.move(Position.MiddleLeft);
    game.move(Position.TopLeft);
    game.move(Position.MiddleMiddle);
    game.move(Position.BottomLeft);
    game.move(Position.MiddleRight);

    expect(game.getWinningPlayer()).toEqual(Player.PlayerO);
  });

  it("player O should win when it has played in bottom row 3 times", () => {
    const game = new TicTacToe();

    game.move(Position.TopMiddle);
    game.move(Position.BottomLeft);
    game.move(Position.TopLeft);
    game.move(Position.BottomMiddle);
    game.move(Position.MiddleRight);
    game.move(Position.BottomRight);

    expect(game.getWinningPlayer()).toEqual(Player.PlayerO);
  });
});

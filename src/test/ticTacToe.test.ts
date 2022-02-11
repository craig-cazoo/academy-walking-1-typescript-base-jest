import {Player, Position, TicTacToe} from "../main/TicTacToe";

describe("TicTacToe", () => {
  it.each([
    [Player.PlayerX, []],
    [Player.PlayerO, [Position.TopLeft]],
    [Player.PlayerX, [Position.TopLeft, Position.TopMiddle]],
    [Player.PlayerO, [Position.TopLeft, Position.TopMiddle, Position.TopRight]],
  ])("should be %s get to go next after %i moves ", (nextPlayer, positions: Position[]) => {
    const game = new TicTacToe();

    for (const position of positions) {
      game.move(position);
    }

    expect(game.getNextPlayer()).toEqual(nextPlayer);
  });

  it("should not be able to play in played position ", () => {
    const game = new TicTacToe();
    game.move(Position.TopLeft);
    expect(() => game.move(Position.TopLeft)).toThrowError();
  });

  it('player X should win when they have a horizontal line', () => {
    const game = new TicTacToe();

    game.move(Position.TopLeft);
    game.move(Position.MiddleLeft);
    game.move(Position.TopMiddle);
    game.move(Position.MiddleMiddle);
    game.move(Position.TopRight);

    expect(game.getWinningPlayer()).toEqual(Player.PlayerX);
  });
})
;

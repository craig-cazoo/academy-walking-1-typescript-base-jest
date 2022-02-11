enum Player {
  PlayerX= "player-x"
}

class TicTacToe {
  getNextPlayer(): Player {
    throw new Error('Not implemented');
  }
}

describe('TicTacToe', () => {
  it('should be X to go first', () => {
    const game = new TicTacToe()

    expect(game.getNextPlayer()).toEqual(Player.PlayerX)
  });
}); 

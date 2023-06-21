import {diceRoll, Game, Player} from '../src/business';

describe("diceRoll", () => {

    test("should generate a random number 1-6", () => {
        const result = diceRoll();
        expect(result).toBeGreaterThanOrEqual(1);
        expect(result).toBeLessThanOrEqual(6);
    });
});

describe ("Player", () => {

    test("It will record name in a player object with base score 0", () => {
        const player1 = new Player("Jason");
        expect(player1.name).toEqual("Jason");
    });
});

describe ( "Game", () => {
    test ("It will add a player object in a game object", () => {
        const playerName = { name: "Jason", tempScore: 0, permScore: 0 };
        const newGame = new Game();
        newGame.addPlayer(playerName);
        expect(newGame.players[1]).toEqual({ name: "Jason", tempScore: 0, permScore: 0, id: 1 });
    });
    test ("It will switch current player", () => {
        const newGame = new Game();
        newGame.setActivePlayer();
        expect(newGame.currentPlayer).toEqual(2);
    });
    test ("It will set current player back to 1", () => {
        const newGame = new Game();
        newGame.setActivePlayer();
        newGame.setActivePlayer();
        expect(newGame.currentPlayer).toEqual(1);
    })

});
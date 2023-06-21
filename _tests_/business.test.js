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
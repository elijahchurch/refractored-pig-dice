import {diceRoll, Game, Player} from '../src/business';

describe("diceRoll", () => {

    test("should generate a random number 1-6", () => {
        const result = diceRoll();
        expect(result).toBeGreaterThanOrEqual(1);
        expect(result).toBeLessThanOrEqual(6);
    });
});
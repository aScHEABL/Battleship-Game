const Ship = require("./index");
describe("Test if ship instance methods work", () => {
    test("Test if ship instance method ship.isSunk() works", () => {
        const carrier_test = new Ship(5);
        for (let i = 0; i < 5; i++) {
            carrier_test.hit();
        }
        expect(carrier_test.status).toBe("sunk");
    })
})
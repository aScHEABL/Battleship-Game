const ships = require("./index");
describe("Test if ships have proper length, health and sunk status", () => {
    test("Test if carrier's property is correctly configured", () => {
        const carrier = new ships.Carrier();
        expect(carrier.length).toBe(5);
        expect(carrier.health).toBe(5);
        expect(carrier.sunk).toBe(false);
    })
    test("Test if battleship's property is correctly configured", () => {
        const battleship = new ships.Battleship();
        expect(battleship.length).toBe(4);
        expect(battleship.health).toBe(4);
        expect(battleship.sunk).toBe(false);
    })
    test("Test if destroyer's property is correctly configured", () => {
        const destroyer = new ships.Destroyer();
        expect(destroyer.length).toBe(3);
        
    })
})
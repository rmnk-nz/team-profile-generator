const { TestWatcher } = require('@jest/core');
const Manager = require('../lib/Manager');

describe('Manager', () => {
    it('Set office number via constructor argument', () => {
        const testVal = 22;
        const manager = new Manager ('Rua', 1, 'test@gmail.com', testVal);

        expect(manager.officeNum).toEqual(testVal);
    });

    it('Get role of employee', () => {
        const testVal = 'Manager';
        const manager = new Manager ('Rua', 1, 'test@gmail.com', 22);

        expect(manager.getRole()).toEqual(testVal);
    });
    it ("Get office number via getOfficeNum()", () => {
        const testVal = 22;
        const manager = new Manager('Rua', 1, "test@test.com", testVal);
        expect(manager.getOfficeNum()).toEqual(testVal);
      });
});
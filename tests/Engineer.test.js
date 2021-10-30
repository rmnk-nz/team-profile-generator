const Engineer = require('../lib/Engineer');

describe('Engineer', () => {
    it('Set githud username via constructor argument', () => {
        const engineer = new Engineer ('Rua', 1, 'test@gmail.com', 'username');

        expect(engineer.github).toEqual('username');
    });
    it('Get role of employee', () => {
        const engineer = new Engineer ('Rua', 1, 'test@gmail.com');

        expect(engineer.getRole()).toEqual('Engineer');
    });
    it ("Get github username via getGithub()", () => {
        const engineer = new Engineer('Rua', 1, "test@test.com", 'username');

        expect(engineer.getGithub()).toEqual(engineer.github);
    });
});
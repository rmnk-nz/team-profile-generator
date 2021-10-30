const Intern = require('../lib/Intern');

describe('Intern', () => {
    it('Set school via constructor argument', () => {
        const intern = new Intern ('Rua', 1, 'test@gmail.com', 'school');

        expect(intern.school).toEqual('school');
    });

    it('Get role of employee', () => {
        const intern = new Intern ('Rua', 1, 'test@gmail.com');

        expect(intern.getRole()).toEqual('Intern');
    });
    it ("Get school via getSchool()", () => {
        const intern = new Intern ('Rua', 1, "test@test.com", 'school');
        expect(intern.getSchool()).toEqual(intern.school);
      });
});
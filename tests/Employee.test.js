const Employee = require('../lib/Employee');

describe('Employee', () =>{
    it('Creates an new employee object', () => {
        const employee = new Employee ();

        expect(typeof(employee)).toEqual('object');
    });
    it('Sets values via constructor arguments', () => {
        const employee = new Employee ('Rua', 1, 'test@gmail.com');

        expect(employee.name).toEqual('Rua');
        expect(employee.id).toEqual(1);
        expect(employee.email).toEqual('test@gmail.com');
    })
    it('Get name via getName()', () => {
        const employee = new Employee ('Rua', 1, 'test@gmail.com');

        expect(employee.getName()).toEqual(employee.name);
    })
    it('Get id via getId()', () => {
        const employee = new Employee ('Rua', 1, 'test@gmail.com');

        expect(employee.getId()).toEqual(employee.id);
    })
    it('Get email via getEmail()', () => {
        const employee = new Employee ('Rua', 1, 'test@gmail.com');

        expect(employee.getEmail()).toEqual(employee.email);
    })
    it('Get role via getRole()', () => {
        const employee = new Employee ('Rua', 1, 'test@gmail.com');

        expect(employee.getRole()).toEqual('Employee');
    })
})
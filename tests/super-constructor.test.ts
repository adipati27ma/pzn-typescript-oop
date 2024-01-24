describe('Super Constructor', () => {
  class Person {
    name: string;

    constructor(name: string) {
      this.name = name;
    }
  }

  class Employee extends Person {
    department: string;

    constructor(name: string, department: string) {
      super(name); // wajib memanggil super() apabila child memiliki constructor tersendiri
      this.department = department;
    }
  }

  it('should support', () => {
    const employee = new Employee('Adip', 'Tech');
    console.info(employee.name);
    console.info(employee.department);
  });
});

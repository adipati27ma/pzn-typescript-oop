describe('Class', () => {
  class Customer {
    constructor() {
      console.info('Create new customer');
    }
  }

  class Order {
    constructor() {}
  }

  it('should can create class', () => {
    const customer1: Customer = new Customer();
    const order1: Order = new Order();
  });

  it('should can create constructors', () => {
    new Customer();
    new Customer();
  });
});

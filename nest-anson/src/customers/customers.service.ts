import { Injectable } from '@nestjs/common';
import { CreateCustomerDto } from './dtos/CreateCustomer.dto';
import { Customer } from './Customer';

@Injectable()
export class CustomersService {
  private customers: Customer[] = [
    {
      id: 1,
      name: 'omer',
      email: 'omer@gmail.com',
    },
    {
      id: 2,
      name: 'ali',
      email: 'ali@gmail.com',
    },
    {
      id: 3,
      name: 'fatih',
      email: 'fatih@gmail.com',
    },
  ];

  findCustomerById(id: number) {
    return this.customers.find((user) => user.id === id);
  }

  createCustomer(customerDto: CreateCustomerDto) {
    this.customers.push(customerDto);
  }

  getCustomers() {
    return this.customers;
  }
}

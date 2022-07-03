import { CreateCustomerDto } from './../../dtos/CreateCustomer.dto';
import { Injectable } from '@nestjs/common';
import { Customer } from 'src/customers/types/Customer';

@Injectable()
export class CustomersService {
  private customers: Customer[] = [
    {
      id: 1,
      email: 'omer@okarakas.ocm',
      name: 'omer',
    },
    {
      id: 2,
      email: 'ali@okarakas.ocm',
      name: 'ali',
    },
    {
      id: 3,
      email: 'fatih@okarakas.ocm',
      name: 'fatih',
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

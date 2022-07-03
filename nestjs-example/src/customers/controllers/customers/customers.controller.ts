import { CustomersService } from './../../services/customers/customers.service';
import {
  Body,
  Controller,
  Get,
  HttpException,
  HttpStatus,
  Param,
  ParseIntPipe,
  Post,
  Req,
  Res,
} from '@nestjs/common';
import { Request, Response } from 'express';
import { CreateCustomerDto } from 'src/customers/dtos/CreateCustomer.dto';

@Controller('customers')
export class CustomersController {
  constructor(private customersService: CustomersService) {}

  // more like express way
  @Get(':id')
  getCustomer(
    @Param('id', ParseIntPipe) id: number,
    @Req() req: Request,
    @Res() res: Response,
  ) {
    //console.log(typeof id);
    const customer = this.customersService.findCustomerById(id);
    if (customer) {
      res.send(customer);
    } else {
      res.status(400).send({ msg: 'customer not found!' });
    }
  }

  //nestjs way
  @Get('/search/:id')
  searchCustomerById(@Param('id', ParseIntPipe) id: number) {
    const customer = this.customersService.findCustomerById(id);
    if (customer) return customer;
    throw new HttpException('Customer Not Found!', HttpStatus.BAD_REQUEST);
  }

  @Get('')
  getAllCustomers() {
    console.log('get home');
    return this.customersService.getCustomers();
  }

  @Post('create')
  createCustomer(@Body() createCustomerDto: CreateCustomerDto) {
    //console.log(createCustomerDto)
    this.customersService.createCustomer(createCustomerDto);
  }
}

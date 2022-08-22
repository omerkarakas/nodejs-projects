import { Body, Controller, Get, Param, Post } from '@nestjs/common';

@Controller('coffees')
export class CoffeesController {
  @Get('flavors')
  findAll() {
    return 'this returns all coffees';
  }

  @Get(':id')
  findOne(@Param() params) {
    return `This action returns #${params.id} coffee(s)`;
  }

  @Post()
  create(@Body('name') body) {
    return body;
  }
}

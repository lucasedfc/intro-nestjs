import {
  Body,
  Controller,
  Delete,
  Get,
  Param,
  Post,
  Put,
} from '@nestjs/common';

@Controller('customers')
export class CustomersController {
  @Get(':customerId')
  getOne(@Param('customerId') customerId: string) {
    return {
      message: `Customer with id ${customerId}`,
    };
  }

  @Post()
  create(@Body() payload: any) {
    return {
      message: 'Customer Created',
      payload,
    };
  }

  @Put(':id')
  update(@Param('id') id: number, @Body() payload: any) {
    return {
      id,
      payload,
    };
  }

  @Delete(':id')
  delete(@Param('id') id: number) {
    return {
      id,
      message: 'Customer Deleted',
    };
  }
}

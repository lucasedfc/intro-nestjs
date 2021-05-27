import {
  Body,
  Controller,
  Delete,
  Get,
  Param,
  Post,
  Put,
} from '@nestjs/common';

@Controller('orders')
export class OrdersController {
  @Get(':orderId')
  getOne(@Param('orderId') orderId: string) {
    return {
      message: `Order with id ${orderId}`,
    };
  }

  @Post()
  create(@Body() payload: any) {
    return {
      message: 'Order Created',
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
      message: 'Order Deleted',
    };
  }
}

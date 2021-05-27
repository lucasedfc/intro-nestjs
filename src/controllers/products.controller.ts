import {
  Body,
  Controller,
  Delete,
  Get,
  Param,
  Post,
  Put,
  Query,
} from '@nestjs/common';

@Controller('products')
export class ProductsController {
  @Get('')
  getProducts(
    @Query('limit') limit = 100,
    @Query('offset') offset = 0,
    @Query('brand') brand: string,
  ) {
    return {
      message: `products: limit => ${limit} offset => ${offset} brand => ${brand}`,
    };
  }

  @Get('filter')
  getProductFilter() {
    return {
      message: `i'm a filter`,
    };
  }

  @Get(':productId')
  getOne(@Param('productId') productId: string) {
    return {
      message: `product with id ${productId}`,
    };
  }

  @Post()
  create(@Body() payload: any) {
    return {
      message: 'Create action',
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
      message: 'Product Deleted',
    };
  }
}

import {
  Body,
  Controller,
  Delete,
  Get,
  Param,
  Post,
  Put,
} from '@nestjs/common';

@Controller('categories')
export class CategoriesController {
  @Get(':id/:products/:productId')
  getCategory(@Param('productId') productId: string, @Param('id') id: string) {
    return `product ${productId} and ${id}`;
  }

  @Get(':categoryId')
  getOne(@Param('categoryId') categoryId: string) {
    return {
      message: `Category with id ${categoryId}`,
    };
  }

  @Post()
  create(@Body() payload: any) {
    return {
      message: 'Category Created',
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
      message: 'Category Deleted',
    };
  }
}

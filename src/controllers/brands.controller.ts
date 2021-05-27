import {
  Body,
  Controller,
  Delete,
  Get,
  Param,
  Post,
  Put,
} from '@nestjs/common';

@Controller('brands')
export class BrandsController {
  @Get(':brandId')
  getOne(@Param('brandId') brandId: string) {
    return {
      message: `brand with id ${brandId}`,
    };
  }

  @Post()
  create(@Body() payload: any) {
    return {
      message: 'Brand Created',
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
      message: 'Brand Deleted',
    };
  }
}

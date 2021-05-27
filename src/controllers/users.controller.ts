import {
  Body,
  Controller,
  Delete,
  Get,
  Param,
  Post,
  Put,
} from '@nestjs/common';

@Controller('users')
export class UsersController {
  @Get(':userId')
  getOne(@Param('userId') userId: string) {
    return {
      message: `User with id ${userId}`,
    };
  }

  @Post()
  create(@Body() payload: any) {
    return {
      message: 'User Created',
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
      message: 'User Deleted',
    };
  }
}

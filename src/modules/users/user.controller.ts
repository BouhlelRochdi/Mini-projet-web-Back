import { Controller, Get, Post, Body, Put, Param, Delete, UseGuards, Query } from '@nestjs/common';
import { AuthGuard } from '@nestjs/passport';
import { JwtUserPayload } from '../auth';
import { CreateUserDto, UpdateUserDto } from './dto/user-dto';
import { CurrentUser } from './user.decorator';

import { UserService } from './user.service';

@Controller('user')
export class UserController {
  constructor(private readonly userService: UserService) { }

  @Post('register')
  registerAccount(@Body() createUserDto: CreateUserDto) {
    return this.userService.registerAccount(createUserDto);
  }

  @UseGuards(AuthGuard('jwt'))
  @Post('add')
  create(@Body() createUserDto: CreateUserDto, @CurrentUser() cuser: JwtUserPayload) {
    return this.userService.create(createUserDto, cuser);
  }

  //@UseGuards(AuthGuard('jwt'))
  @Get('user-mail')
  findUserByEmail(@Body() body) {
    return this.userService.findUserByEmail(body.email);
  }

  //@UseGuards(AuthGuard('jwt'))
  @Get(':id')
  findOneById(@Query() query: any) {
    return this.userService.findOneById(query.id);
  }

  //@UseGuards(AuthGuard('jwt'))
  @Put()
  updateUser(@Body() updateUserDto: UpdateUserDto) {
    return this.userService.updateUser(updateUserDto);
  }

  //@UseGuards(AuthGuard('jwt'))
  @Delete(':id')
  remove(@Param() params) {
    return this.userService.remove(params.id);
  }
}

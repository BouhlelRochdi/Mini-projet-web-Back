import { Controller, Get, Post, Body, Put, Param, Delete, UseGuards, UploadedFile, UseInterceptors, Query, Req } from '@nestjs/common';
import { CreateUserDto, UpdateUserDto } from './dto/user-dto';

import { UserService } from './user.service';

@Controller('user')
export class UserController {
  constructor(private readonly userService: UserService) { }

  @Post('register')
  registerAccount(@Body() createUserDto: CreateUserDto) {
    return this.userService.registerAccount(createUserDto);
  }

  //@UseGuards(AuthGuard('jwt'))
  @Post('add') 
  create(@Body() createUserDto: CreateUserDto){ //@CurrentUser() cuser: JwtUserPayload) {
    // Create SmrAccount missing upload photo
    let cuser: any = ''
    return this.userService.create(createUserDto, cuser);
  }

  //@UseGuards(AuthGuard('jwt'))
  @Get()
  findSmrAccountsByUser(@Body() id: string) {
    return this.userService.findUserById(id);
  }

  //@UseGuards(AuthGuard('jwt'))
  @Get(':id')
  findOne(@Param('id') id: string) {
    return this.userService.findOne(id);
  }

  //@UseGuards(AuthGuard('jwt'))
  @Put()
  update(@Body() updateUserDto: UpdateUserDto) {
    return this.userService.update(updateUserDto);
  }

  // @UseGuards(AuthGuard('jwt'))
  // @Put('fbdata')
  // addData(@Body() data: any) {
  //   return this.userService.addData(data);
  // }

  //@UseGuards(AuthGuard('jwt'))
  @Delete(':id')
  remove(@Param() params) {
    return this.userService.remove(params.id);
  }

  // @UseGuards(AuthGuard('jwt'))
  // @Post('add')
  // register(@Req() req, @Body() body) {
  //   console.warn('Body: ', body);
  //   console.warn('request: ', req);
  //   console.warn('request files: ',req.file);
  //    return null
  // }

  // @Post('upload')
  // @UseInterceptors(FileInterceptor('photo', storage))
  // register(@UploadedFile() file) {
  //   return of(file);
  // }

  // @Post('upload')
  // @UseInterceptors(FileInterceptor('photo', storage))
  // register(@Body() createSmrAccountDto: CreateSmrAccountDto, @UploadedFile() file: Express.Multer.File) {
  //   console.log('file: ', file);
  //   console.log('createSmrAccountDto: ', query);
  //   // return this.userService.registerWithPhoto(createSmrAccountDto, {photo: file.filename})
  //   return of(file);
  // }
}

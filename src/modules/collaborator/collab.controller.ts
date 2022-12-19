import { Controller, Get, Post, Body, Put, Param, Delete, UseGuards, UploadedFile, UseInterceptors, Query, Req } from '@nestjs/common';
import { CollabService } from './collab.service';
import { CreateCollabDto, UpdateCollabDto } from './dto/collab-dto';

@Controller('collab')
export class CollabController {
  constructor(private readonly userService: CollabService) { }

  @Post('register')
  registerAccount(@Body() CreateCollabDto: CreateCollabDto) {
    return this.userService.registerAccount(CreateCollabDto);
  }

  //@UseGuards(AuthGuard('jwt'))
  @Post('add') 
  create(@Body() CreateCollabDto: CreateCollabDto){ //@CurrentUser() cuser: JwtUserPayload) {
    // Create SmrAccount missing upload photo
    let cuser: any = ''
    return this.userService.create(CreateCollabDto, cuser);
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
  update(@Body() updateUserDto: UpdateCollabDto) {
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

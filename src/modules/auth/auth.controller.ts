import { Controller, Get, Post, Body, Patch, Param, Delete } from '@nestjs/common';
import { AuthService } from './auth.service';
import { AuthDto } from './dto/auth.dto';
import { JwtUserPayload } from './dto/jwt.use.payload';

@Controller('auth')
export class AuthController {
  constructor(private readonly authService: AuthService) {}

  @Post('login')
  login(@Body() user: JwtUserPayload){
    return this.authService.login(user)
  }

  @Post('signin')
  signIn(@Body() user: AuthDto){
    return this.authService.signIn(user)
  }
}

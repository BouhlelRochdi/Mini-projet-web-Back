import { Injectable, UnauthorizedException } from '@nestjs/common';
import { JwtService } from '@nestjs/jwt';

import { UserService } from '../users/user.service';
import { AuthDto } from './dto/auth.dto';
import { JwtUserPayload } from './dto/jwt.use.payload';

const users = require('./dto/users.json');

@Injectable()
export class AuthService {

  constructor(
    private readonly userService: UserService,
    private readonly jwtService: JwtService,
  ) { }

  async validateUser(email: string, pass: string): Promise<any> {
    try {
      console.log('validateUser user',email);
      const user = await this.userService.checkLogin(email, pass);
      console.log('validateUser user',user);
      if (user) {
        return user;
      } else {
        throw new UnauthorizedException();
      }
    } catch (err) {
      throw new UnauthorizedException();
    }
  }
  
  async login(user: JwtUserPayload) {
    console.log('auth service login',user);
    const payload : JwtUserPayload = { id: user.id, email: user.email, jobtitle: user?.jobtitle };
    console.log('auth service login payload',payload);
    return {
      access_token: this.jwtService.sign(payload),
    };
  }

  signIn(user: AuthDto) {
    //const findeduser: any = this.societyModel.find((_user: AuthDto) => _user.email === user.email);
    const findeduser: any = users.find((_user: AuthDto) => _user.email === user.email);
    if(!findeduser) throw new UnauthorizedException('user does not exist');
    if(findeduser.password !== user.password) throw new UnauthorizedException('Pasword incorrect');
    return findeduser;
  }
}

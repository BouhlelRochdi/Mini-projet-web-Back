import { HttpException, Injectable } from '@nestjs/common';
import { InjectModel } from '@nestjs/mongoose';
import { Model } from 'mongoose';
import { UserDocument } from './model/user';
import { CreateUserDto, UpdateUserDto } from './dto/user-dto';
import { JwtUserPayload } from '../auth';
import * as bcrypt from 'bcrypt';

const SALT_WORK_FACTOR = 10;


@Injectable()
export class UserService {

  constructor(
    @InjectModel('User') private readonly userModel: Model<UserDocument>
  ) { }

  async checkLogin(email: string, password: string): Promise<JwtUserPayload> {
    // https://github.com/Automattic/mongoose/issues/8119
    const findedUser = await this.getAuthenticated(email, password);
    if (!findedUser) {
      throw new HttpException('user did not have an account', 401);;
    }
    // login was successful if we have a user
    return {
      id: findedUser._id,
      email: findedUser.email,
      accountType: findedUser.accountType,
      jobtitle: findedUser.jobtitle
    } as JwtUserPayload;
  }

  async getAuthenticated(email, password): Promise<UpdateUserDto | null> {
    const condidateUser = await this.userModel.findOne({ email: email });
    // check exist user
    if (condidateUser) {
      // test for a matching password
      const isPassmatch = await this.comparePassword(password, condidateUser.password);
      if (isPassmatch) {
        //success login
        return condidateUser;
      } else {
        // incorrect password
        throw new HttpException('incorrect password', 601);
      }
    } else {
      //not found user
      return null;
    }
  }

  async comparePassword(userPassword, hashPass) {
    return await bcrypt.compare(userPassword, hashPass);
  };

  async create(createUserDto: CreateUserDto, cuser: any): Promise<UserDocument> {
    if (!cuser && createUserDto.email != cuser.id) {
      throw new HttpException('Not user request found', 401);
    } else {
      const cryptPwd = await this.cryptPassword('user')
      const completeUser: CreateUserDto = { ...createUserDto, password: cryptPwd };
      const createObject = new this.userModel(completeUser)
      return await createObject.save();
    }
  }

  async registerAccount(createUserDto: CreateUserDto): Promise<UserDocument> {
    if (createUserDto || createUserDto.password != null) {
      const hashPwd = await this.cryptPassword(createUserDto.password)
      const newObj: CreateUserDto = { ...createUserDto, password: hashPwd }
      const createObject = new this.userModel(newObj);
      return await createObject.save();
    } else {
      throw new HttpException('Not user request found or missing password field', 401);
    }
  }

  async cryptPassword(password: string) {
    const salt = await bcrypt.genSalt(SALT_WORK_FACTOR);
    const hash = await bcrypt.hash(password, salt)
    return hash;
  }

  async findOneById(id: string): Promise<UserDocument> {
    if (!id) {
      throw new HttpException('No id found', 401);
    } else {
      try {
        return await this.userModel.findById({ _id: id }).exec();
      } catch (err) {
        throw new HttpException('Error in found applications', 603);
      }
    }
  }

  async findUserByEmail(email: string): Promise<UserDocument> {
    if (!email) {
      throw new HttpException('No email found', 401);
    } else {
      try {
        return await this.userModel.findOne({ email: email }).exec();
      } catch (err) {
        throw new HttpException('Error in found account', 603);
      }
    }
  }

  async updateUser(updateUserDto: UpdateUserDto): Promise<UserDocument> {
    const updateOptions = { upsert: true, new: true };
    const service = await this.userModel.findByIdAndUpdate(updateUserDto._id, updateUserDto, updateOptions);
    return service;
  }

  async remove(id: number) {
    const smrAccount = await this.userModel.findOneAndDelete({ _id: id }).exec();
    return { _id: smrAccount._id };
  }
}

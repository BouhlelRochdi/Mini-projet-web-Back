import { HttpException, Injectable } from '@nestjs/common';
import { InjectModel } from '@nestjs/mongoose';
import { Model } from 'mongoose';
import * as mongoose from 'mongoose';
import { UserDocument } from './model/user';
import { CreateUserDto } from './dto/user-dto';


@Injectable()
export class UserService {

  constructor(
    @InjectModel('User') private readonly userModel: Model<UserDocument>
  ) { }

  async create(CreateUserDto: CreateUserDto, cuser: any): Promise<UserDocument> {
    if (!cuser && CreateUserDto.email != cuser.id) {
      throw new HttpException('Not user request found or not authUser in smr-account', 401);
    } else {
      const createObject = new this.userModel(CreateUserDto)
      return await createObject.save().then(createObject => createObject.populate('user'));
    }
  }

  async registerAccount(CreateUserDto: CreateUserDto): Promise<UserDocument> {
    // TODO with security(check login attempts after user login)
    // missing upoload photo
    const createObject = new this.userModel(CreateUserDto);
    return await createObject.save();
    //.then(createObject => createObject.populate('user'));
  }

  async findUserById(id: string) {
    if (!id) {
      throw new HttpException('Not id found', 401);
    } else {
      try {
        const aquery: any = { _id: new mongoose.Types.ObjectId(id) };
        return await this.userModel.find(aquery).exec();
      } catch (err) {
        throw new HttpException('Error in found applications', 603);
      }
    }
  }

  async findOne(id: string): Promise<UserDocument> {
    const smrAccount = await this.userModel.findOne({ _id: id });
    return smrAccount;
  }

  async update(updateSmrAccountDto: any): Promise<UserDocument> {
    const updateOptions = { upsert: true, new: true };
    const service = await this.userModel.findByIdAndUpdate(updateSmrAccountDto._id, updateSmrAccountDto, updateOptions );
    return service;
  }

  async remove(id: number) {
    const smrAccount = await this.userModel.findOneAndDelete({ _id: id }).exec();
    return { _id: smrAccount._id };
  }
}

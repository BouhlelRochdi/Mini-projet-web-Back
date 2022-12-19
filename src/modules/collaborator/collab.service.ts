import { HttpException, Injectable } from '@nestjs/common';
import { InjectModel } from '@nestjs/mongoose';
import { Model } from 'mongoose';
import * as mongoose from 'mongoose';
import { CollabDocument } from './model/collab';
import { CreateCollabDto } from './dto/collab-dto';



@Injectable()
export class CollabService {

  constructor(
    @InjectModel('Collaborator') private readonly collabModel: Model<CollabDocument>
  ) { }

  async create(CreateCollabDto: CreateCollabDto, cuser: any): Promise<CollabDocument> {
    if (!cuser && CreateCollabDto.email != cuser.id) {
      throw new HttpException('Not user request found or not authUser in smr-account', 401);
    } else {
      const createObject = new this.collabModel(CreateCollabDto)
      return await createObject.save().then(createObject => createObject.populate('user'));
    }
  }

  async registerAccount(CreateCollabDto: CreateCollabDto): Promise<CollabDocument> {
    // TODO with security(check login attempts after user login)
    // missing upoload photo
    const createObject = new this.collabModel(CreateCollabDto);
    return await createObject.save();
    //.then(createObject => createObject.populate('user'));
  }

  async findUserById(id: string) {
    if (!id) {
      throw new HttpException('Not id found', 401);
    } else {
      try {
        const aquery: any = { _id: new mongoose.Types.ObjectId(id) };
        return await this.collabModel.find(aquery).exec();
      } catch (err) {
        throw new HttpException('Error in found applications', 603);
      }
    }
  }

  async findOne(id: string): Promise<CollabDocument> {
    const smrAccount = await this.collabModel.findOne({ _id: id });
    return smrAccount;
  }

  async update(updateSmrAccountDto: any): Promise<CollabDocument> {
    const updateOptions = { upsert: true, new: true };
    const service = await this.collabModel.findByIdAndUpdate(updateSmrAccountDto._id, updateSmrAccountDto, updateOptions );
    return service;
  }

  async remove(id: number) {
    const smrAccount = await this.collabModel.findOneAndDelete({ _id: id }).exec();
    return { _id: smrAccount._id };
  }
}

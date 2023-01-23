/*
https://docs.nestjs.com/providers#services
*/

import { Injectable } from '@nestjs/common';
import { HttpException } from '@nestjs/common/exceptions';
import { InjectModel } from '@nestjs/mongoose';
import { Model } from 'mongoose';
import { JwtUserPayload } from '../auth';
import { CreateDepartDto, UpdateDepartDto } from './dto/depart-dto';
import { DepartDocument } from './model/depart';
import * as mongoose from 'mongoose';

@Injectable()
export class DepartService {

    constructor(
        @InjectModel('Depart') private readonly departModel: Model<DepartDocument>
    ) { }

    async addNewDepart(createDepartDto: CreateDepartDto, cuser: JwtUserPayload) {
        if (!cuser || !createDepartDto) {
            throw new HttpException('User not authorized or not user request found', 401);
        } else {
            const createObject = new this.departModel(createDepartDto);
            return await createObject.save().then(obj => obj.populate('responsable'));
        }
    }

    async updateDepart(updateDepartDto: UpdateDepartDto) {

    }

    async getDepartById(id: string) {
        if (!id) {
            throw new HttpException('No id found', 401);
        } else {
            try {
                return await this.departModel.findById({ _id: id }).populate('responsable').exec();
            } catch (err) {
                throw new HttpException('Error in found departement', 603);
            }
        }
    }

    async getDepartByResponsable(id: string) {
        if (!id) {
            throw new HttpException('No id found', 401);
        } else {
            try {
                const aquery: any = { user: new mongoose.Types.ObjectId(id) };
                return await this.departModel.find(aquery).populate('responsable').exec();
            } catch (err) {
                throw new HttpException('Error in found departement', 603);
            }
        }
    }

    async getAllDepart(cuser: JwtUserPayload) {
        if (!cuser) throw new HttpException('No id found', 401);
        try {
            return await this.departModel.find().populate('responsable').exec();
        } catch (err) {
            throw new HttpException('Error in found departement', 603);
        }
    }

    async getAllCollabInDepart(id: string) {

    }


}

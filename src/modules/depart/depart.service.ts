/*
https://docs.nestjs.com/providers#services
*/

import { Injectable } from '@nestjs/common';
import { InjectModel } from '@nestjs/mongoose';
import { Model } from 'mongoose';
import { CreateDepartDto, UpdateDepartDto } from './dto/depart-dto';
import { DepartDocument } from './model/depart';

@Injectable()
export class DepartService {

    constructor(
        @InjectModel('depart') private readonly departModel: Model<DepartDocument>
    ) { }

    async addNewDepart(createDepartDto: CreateDepartDto) {

    }

    async updateDepart(updateDepartDto: UpdateDepartDto) {

    }

    async getDepartById(id: string) {

    }

    async getDepartByResponsable(id: string) {

    }

    async getAllCollabInDepart(id: string) {

    }


}

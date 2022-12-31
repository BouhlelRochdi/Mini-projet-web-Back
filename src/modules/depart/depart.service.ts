/*
https://docs.nestjs.com/providers#services
*/

import { Injectable } from '@nestjs/common';
import { InjectModel } from '@nestjs/mongoose';
import { Model } from 'mongoose';
import { DepartDocument } from './model/depart';

@Injectable()
export class DepartService {

    constructor(
        @InjectModel('Depart') private readonly departModel: Model<DepartDocument>
    ) { }
}

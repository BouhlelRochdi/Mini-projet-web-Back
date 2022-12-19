/*
https://docs.nestjs.com/providers#services
*/

import { Injectable } from '@nestjs/common';
import { InjectModel } from '@nestjs/mongoose';
import { Model } from 'mongoose';
import { SocietyDocument } from './model/society';

@Injectable()
export class SocietyService {
    constructor(
        @InjectModel('Society') private readonly societyModel: Model<SocietyDocument>
    ) { }
}

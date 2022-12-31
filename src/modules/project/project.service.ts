/*
https://docs.nestjs.com/providers#services
*/

import { Injectable } from '@nestjs/common';
import { InjectModel } from '@nestjs/mongoose';
import { Model } from 'mongoose';
import { ProjectDocument } from './model/project';

@Injectable()
export class ProjectService {
    constructor(
        @InjectModel('Project') private readonly ProjectModel: Model<ProjectDocument>
    ) { }
 }

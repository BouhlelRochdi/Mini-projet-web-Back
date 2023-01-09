/*
https://docs.nestjs.com/providers#services
*/

import { Injectable } from '@nestjs/common';
import { InjectModel } from '@nestjs/mongoose';
import { Model } from 'mongoose';
import { CreateProjectDto, UpdateProjectDto } from './dto/project-dto';
import { ProjectDocument } from './model/project';

@Injectable()
export class ProjectService {

    constructor(
        @InjectModel('project') private readonly ProjectModel: Model<ProjectDocument>
    ) { }

    addNewProject(createProjectDto: CreateProjectDto) {
        throw new Error('Method not implemented.');
    }

    updateProject(updateProjectDto: UpdateProjectDto) {
        throw new Error('Method not implemented.');
    }

    getProjectById(id: any) {
        throw new Error('Method not implemented.');
    }

    getProjectBySociety(id: any) {
        throw new Error('Method not implemented.');
    }
 }

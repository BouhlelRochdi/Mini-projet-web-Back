/*
https://docs.nestjs.com/providers#services
*/

import { HttpException, Injectable } from '@nestjs/common';
import { InjectModel } from '@nestjs/mongoose';
import { Model } from 'mongoose';
import { JwtUserPayload } from '../auth';
import { CreateProjectDto, UpdateProjectDto } from './dto/project-dto';
import { ProjectDocument } from './model/project';
import * as mongoose from 'mongoose';


@Injectable()
export class ProjectService {

  constructor(
    @InjectModel('project') private readonly projectModel: Model<ProjectDocument>
  ) { }

  async addNewProject(createProjectDto: CreateProjectDto, cuser: JwtUserPayload) {
    if (!cuser || !createProjectDto) {
      throw new HttpException('User not authorized or not user request found', 401);
    } else {
      const createObject = new this.projectModel(createProjectDto);
      return await createObject.save().then(obj => obj.populate('society'));
    }
  }

  updateProject(updateProjectDto: UpdateProjectDto) {
    throw new Error('Method not implemented.');
  }

  async getProjectById(id: any) {
    if (!id) {
      throw new HttpException('No id found', 401);
    } else {
      try {
        return await this.projectModel.findById({ _id: id }).populate('society').populate('depart').exec();
      } catch (err) {
        throw new HttpException('Error in found project', 603);
      }
    }
  }

  async getProjectBySociety(id: any) {
    if (!id) {
      throw new HttpException('No id found', 401);
    } else {
      try {
        const aquery: any = { society: new mongoose.Types.ObjectId(id) };
        return await this.projectModel.find(aquery).populate('society').populate('depart').exec();
      } catch (err) {
        throw new HttpException('Error in found project', 603);
      }
    }
  }

  async getProjectByDepart(id: any) {
    if (!id) {
      throw new HttpException('No id found', 401);
    } else {
      try {
        const aquery: any = { depart: new mongoose.Types.ObjectId(id) };
        return await this.projectModel.find(aquery).populate('society').populate('depart').exec();
      } catch (err) {
        throw new HttpException('Error in found project', 603);
      }
    }
  }
}

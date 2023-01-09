import { ProjectService } from './project.service';
import { ProjectController } from './project.controller';
/*
https://docs.nestjs.com/modules
*/

import { Module } from '@nestjs/common';
import { MongooseModule } from '@nestjs/mongoose';
import { ProjectSchema } from './model/project';

@Module({
    imports: [
        MongooseModule.forFeature([
            { name: 'project', schema: ProjectSchema }
          ])
    ],
    controllers: [
        ProjectController,],
    providers: [
        ProjectService,],
})
export class ProjectModule { }

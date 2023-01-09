/*
https://docs.nestjs.com/controllers#controllers
*/

import { Body, Controller, Get, Post, Query, UseGuards } from '@nestjs/common';
import { AuthGuard } from '@nestjs/passport';
import { JwtUserPayload } from '../auth';
import { CurrentUser } from '../users';
import { CreateProjectDto, UpdateProjectDto } from './dto/project-dto';
import { ProjectService } from './project.service';

@Controller()
export class ProjectController {

    constructor(private readonly projectService: ProjectService) { }

    @UseGuards(AuthGuard('jwt'))
    @Post('register')
    addNewProject(@Body() createProjectDto: CreateProjectDto) {
        return this.projectService.addNewProject(createProjectDto);
    }

    @UseGuards(AuthGuard('jwt'))
    @Post('update')
    updateProject(@Body() updateProjectDto: UpdateProjectDto, @CurrentUser() cuser: JwtUserPayload) {
        return this.projectService.updateProject(updateProjectDto);
    }

    @UseGuards(AuthGuard('jwt'))
    @Get('byId')
    getProjectById(@Query() query) {
        return this.projectService.getProjectById(query.id);
    }

    @UseGuards(AuthGuard('jwt'))
    @Get('byResp')
    getProjectBySociety(@Query() query) {
        return this.projectService.getProjectBySociety(query.id);
    }
 }

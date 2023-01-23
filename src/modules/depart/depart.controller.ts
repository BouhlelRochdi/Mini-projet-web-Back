/*
https://docs.nestjs.com/controllers#controllers
*/

import { Body, Controller, Get, Post, UseGuards } from '@nestjs/common';
import { Query } from '@nestjs/common/decorators';
import { AuthGuard } from '@nestjs/passport';
import { JwtUserPayload } from '../auth';
import { CurrentUser } from '../users';
import { DepartService } from './depart.service';
import { CreateDepartDto, UpdateDepartDto } from './dto/depart-dto';

@Controller('departement')
export class DepartController {

    constructor(private readonly departService: DepartService) { }

    @UseGuards(AuthGuard('jwt'))
    @Post('add')
    addNewDepart(@Body() createDepartDto: CreateDepartDto, @CurrentUser() cuser: JwtUserPayload) {
        return this.departService.addNewDepart(createDepartDto, cuser);
    }

    @UseGuards(AuthGuard('jwt'))
    @Post('update')
    updateDepart(@Body() updateDepartDto: UpdateDepartDto, @CurrentUser() cuser: JwtUserPayload) {
        return this.departService.updateDepart(updateDepartDto);
    }

    @UseGuards(AuthGuard('jwt'))
    @Get('all')
    getAllDepart(@CurrentUser() cuser: JwtUserPayload) {
        return this.departService.getAllDepart(cuser);
    }

    @UseGuards(AuthGuard('jwt'))
    @Get('byId')
    getDepartById(@Query() query) {
        return this.departService.getDepartById(query.id);
    }

    @UseGuards(AuthGuard('jwt'))
    @Get('byResp')
    getDepartByResponsable(@Query() query) {
        return this.departService.getDepartByResponsable(query.id);
    }

    @UseGuards(AuthGuard('jwt'))
    @Get('allCollabInDepart')
    getAllCollabInDepart(@Query() query) {
        return this.departService.getAllCollabInDepart(query.id);
    }
}

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
    @Post('register')
    addNewDepart(@Body() createDepartDto: CreateDepartDto) {
        return this.departService.addNewDepart(createDepartDto);
    }

    @UseGuards(AuthGuard('jwt'))
    @Post('update')
    updateDepart(@Body() updateDepartDto: UpdateDepartDto, @CurrentUser() cuser: JwtUserPayload) {
        return this.departService.updateDepart(updateDepartDto);
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
    @Get('allDepart')
    getAllCollabInDepart(@Query() query) {
        return this.departService.getAllCollabInDepart(query.id);
    }
}

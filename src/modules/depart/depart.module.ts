import { DepartService } from './depart.service';
import { DepartController } from './depart.controller';
/*
https://docs.nestjs.com/modules
*/

import { Module } from '@nestjs/common';

@Module({
    imports: [],
    controllers: [
        DepartController,],
    providers: [
        DepartService,],
})
export class DepartModule { }

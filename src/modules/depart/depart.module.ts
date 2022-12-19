import { DepartService } from './depart.service';
import { DepartController } from './depart.controller';
/*
https://docs.nestjs.com/modules
*/

import { Module } from '@nestjs/common';
import { MongooseModule } from '@nestjs/mongoose';
import { DepartSchema } from './model/depart';

@Module({
    imports: [
        MongooseModule.forFeature([
            { name: 'Depart', schema: DepartSchema }
          ])
    ],
    controllers: [
        DepartController,],
    providers: [
        DepartService,],
})
export class DepartModule { }

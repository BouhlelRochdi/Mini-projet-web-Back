import { SocietyService } from './society.service';
import { SocietyController } from './society.controller';
/*
https://docs.nestjs.com/modules
*/

import { Module } from '@nestjs/common';
import { MongooseModule } from '@nestjs/mongoose';
import { SocietySchema } from './model/society';

@Module({
    imports: [
        MongooseModule.forFeature([
            { name: 'Society', schema: SocietySchema }
          ])
    ],
    controllers: [
        SocietyController,],
    providers: [
        SocietyService,],
})
export class SocietyModule { }

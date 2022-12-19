import { SocietyService } from './society.service';
import { SocietyController } from './society.controller';
/*
https://docs.nestjs.com/modules
*/

import { Module } from '@nestjs/common';

@Module({
    imports: [],
    controllers: [
        SocietyController,],
    providers: [
        SocietyService,],
})
export class SocietyModule { }

import { ProjectModule } from './modules/project/project.module';
import { DepartModule } from './modules/depart/depart.module';
import { SocietyModule } from './modules/society/society.module';

import { Module } from '@nestjs/common';
import { MongooseModule } from '@nestjs/mongoose';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { AuthModule } from './modules/auth/auth.module';
import { CollabModule } from './modules/collaborator/collab.module';
import { UserModule } from './modules/users/user.module';

@Module({
  imports: [
    //DataBase
    //MongooseModule.forRootAsync({
    //  useClass: MongooseConfigService,
    //}),
    MongooseModule.forRoot('mongodb://localhost/mini_prj_web'),
    
    //Modules
    UserModule,
    AuthModule,
    CollabModule,
    DepartModule,
    SocietyModule,
    ProjectModule,
  ],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule { }

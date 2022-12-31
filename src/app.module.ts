import { ProjectModule } from './modules/project/project.module';
import { DepartModule } from './modules/depart/depart.module';

import { Module } from '@nestjs/common';
import { MongooseModule } from '@nestjs/mongoose';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { AuthModule } from './modules/auth/auth.module';
import { UserModule } from './modules/users/user.module';
import { MongooseConfigService } from './config/mongoose/mongoose.config.service';

@Module({
  imports: [
    //DataBase
    MongooseModule.forRootAsync({
     useClass: MongooseConfigService,
    }),
    //MongooseModule.forRoot('mongodb://localhost/mini_prj_web'),
    
    //Modules
    UserModule,
    AuthModule,
    DepartModule,
    ProjectModule,
  ],
  controllers: [AppController],
  providers: [AppService, MongooseConfigService],
})
export class AppModule { }

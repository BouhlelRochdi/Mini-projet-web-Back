import { AuthModule } from '@app/auth';
import { Module } from '@nestjs/common';
import { MongooseModule } from '@nestjs/mongoose';
import { AppController } from './app.controller';
import { AppService } from './app.service';

@Module({
  imports: [
    //MongooseModule.forRootAsync({
    //  useClass: MongooseConfigService,
    //}),
    MongooseModule.forRoot('mongodb://localhost/mini_prj_web'),
    AuthModule
  ],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule { }

import { Module } from '@nestjs/common';
import { MongooseModule } from '@nestjs/mongoose';
import { CollabController } from './collab.controller';
import { CollabService } from './collab.service';
import { CollabSchema } from './model/collab';

@Module({
  imports: [
    MongooseModule.forFeature([
      { name: 'Collaborator', schema: CollabSchema }
    ])
  ],
  controllers: [CollabController],
  providers: [CollabService]
})
export class CollabModule {}

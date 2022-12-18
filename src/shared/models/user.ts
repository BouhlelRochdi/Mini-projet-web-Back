// One to many by references
import { Prop, Schema, SchemaFactory } from '@nestjs/mongoose';
import { Document } from 'mongoose';
import * as mongoose from 'mongoose';

export type UserDocument = User & mongoose.Document;

@Schema()
export class User {

  @Prop() firstName?: string;
  @Prop() lastName?: string;
  @Prop() email?: string;
  @Prop() adress: string;
  @Prop() phone: string;
  @Prop() cvLink: string;
  @Prop() photo: string;//CustomFileType;
}

export const UserSchema = SchemaFactory.createForClass(User);

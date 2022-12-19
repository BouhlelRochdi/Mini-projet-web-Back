// One to many by references
import { Prop, Schema, SchemaFactory } from '@nestjs/mongoose';
import { Document } from 'mongoose';
import * as mongoose from 'mongoose';
import { UserBase } from '../dto/user-dto';

export type UserDocument = User & mongoose.Document;

@Schema({ timestamps: true })
export class User extends UserBase {
  @Prop() firstName?: string;
  @Prop() lastName?: string;
  @Prop() email?: string;
  @Prop() adress: string;
  @Prop() phone: string;
  @Prop() cvLink: string;
  @Prop() photo: string;//CustomFileType;
}

export const UserSchema = SchemaFactory.createForClass(User);

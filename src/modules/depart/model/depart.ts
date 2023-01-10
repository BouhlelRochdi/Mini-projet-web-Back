// One to many by references
import { Prop, Schema, SchemaFactory } from '@nestjs/mongoose';
import * as mongoose from 'mongoose';
import { ProjectBase } from 'src/modules/project/dto/project-dto';
import { DepartBase } from '../dto/depart-dto';
import { UserBase } from 'src/modules/users/dto/user-dto';

export type DepartDocument = Depart & mongoose.Document;

@Schema({ timestamps: true })
export class Depart extends DepartBase {
  @Prop() name: string;
  @Prop({ type: mongoose.Schema.Types.ObjectId, ref: 'User' }) responsable: UserBase;
}

export const DepartSchema = SchemaFactory.createForClass(Depart);

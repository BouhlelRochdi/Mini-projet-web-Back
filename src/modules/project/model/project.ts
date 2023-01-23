// One to many by references
import { Prop, Schema, SchemaFactory } from '@nestjs/mongoose';
import * as mongoose from 'mongoose';
import { DepartBase } from 'src/modules/depart/dto/depart-dto';
import { UserBase } from 'src/modules/users/dto/user-dto';
import { ProjectBase } from '../dto/project-dto';

export type ProjectDocument = Project & mongoose.Document;

@Schema({ timestamps: true })
export class Project extends ProjectBase {
  @Prop() name?: string;
  @Prop() client?: string;
  @Prop({ type: mongoose.Schema.Types.ObjectId, ref: 'User' }) society: UserBase;
  @Prop({ type: [{ type: mongoose.Schema.Types.ObjectId, ref: 'Depart' }] }) depart: DepartBase[];

}

export const ProjectSchema = SchemaFactory.createForClass(Project);

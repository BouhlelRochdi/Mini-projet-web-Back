// One to many by references
import { Prop, Schema, SchemaFactory } from '@nestjs/mongoose';
import { Document } from 'mongoose';
import * as mongoose from 'mongoose';
import { SocietyBase } from 'src/modules/society/dto/society-dto';
import { ProjectBase } from 'src/modules/project/dto/project-dto';
import { CollabBase } from 'src/modules/collaborator/dto/collab-dto';
import { DepartBase } from '../dto/depart-dto';

export type DepartDocument = Depart & mongoose.Document;

@Schema({ timestamps: true })
export class Depart extends DepartBase {
  @Prop() name: string;
  @Prop({ type: mongoose.Schema.Types.ObjectId, ref: 'Collab' }) responsable: CollabBase;
  @Prop({ type: mongoose.Schema.Types.ObjectId, ref: 'Society' }) society: SocietyBase;
  @Prop({ type: [{ type: mongoose.Schema.Types.ObjectId, ref: 'Project' }] }) project: ProjectBase[];
}

export const DepartSchema = SchemaFactory.createForClass(Depart);

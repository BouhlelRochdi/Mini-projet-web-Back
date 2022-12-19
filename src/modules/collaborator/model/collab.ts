// One to many by references
import { Prop, Schema, SchemaFactory } from '@nestjs/mongoose';
import { Document } from 'mongoose';
import * as mongoose from 'mongoose';
import { SocietyBase } from 'src/modules/society/dto/society-dto';
import { ProjectBase } from 'src/modules/project/dto/project-dto';
import { DepartBase } from 'src/modules/depart/dto/depart-dto';

export type CollabDocument = Collab & mongoose.Document;

@Schema({ timestamps: true })
export class Collab {
  @Prop() firstName: string;
  @Prop() lastName: string;
  @Prop() email: string;
  @Prop() password: string;
  @Prop() jobtitle: string;
  @Prop() photo: string;//CustomFileType;
  @Prop() cvLink: string;
  @Prop() adress: string;
  @Prop() phone: string;
  @Prop() birthdate: Date;
  @Prop({ type: mongoose.Schema.Types.ObjectId, ref: 'Society' }) society: SocietyBase;
  @Prop({ type: mongoose.Schema.Types.ObjectId, ref: 'Depart' }) depart: DepartBase;
  @Prop({ type: [{ type: mongoose.Schema.Types.ObjectId, ref: 'Project' }] }) project: ProjectBase[];
}

export const CollabSchema = SchemaFactory.createForClass(Collab);

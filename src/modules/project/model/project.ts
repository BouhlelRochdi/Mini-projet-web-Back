// One to many by references
import { Prop, Schema, SchemaFactory } from '@nestjs/mongoose';
import { Document } from 'mongoose';
import * as mongoose from 'mongoose';
import { SocietyBase } from 'src/modules/society/dto/society-dto';

export type DepartDocument = Depart & mongoose.Document;

@Schema({timestamps: true})
export class Depart {
  @Prop() name?: string;
  @Prop() client?: string;
  @Prop({ type: mongoose.Schema.Types.ObjectId, ref: 'Society' }) society: SocietyBase;
}

export const ProjectSchema = SchemaFactory.createForClass(Depart);

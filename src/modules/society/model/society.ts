// One to many by references
import { Prop, Schema, SchemaFactory } from '@nestjs/mongoose';
import * as mongoose from 'mongoose';

export type SocietyDocument = Society & mongoose.Document;

@Schema()
export class Society {

  @Prop() name: string;
  @Prop() email: string;
  @Prop() activity: string;
  @Prop() adress: string;
  @Prop() phone: string;
  @Prop() logo: string;
  @Prop() matFiscal: string;//CustomFileType;
}

export const SocietySchema = SchemaFactory.createForClass(Society);

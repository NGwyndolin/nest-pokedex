import { Prop, SchemaFactory, Schema } from '@nestjs/mongoose';
import { Document } from 'mongoose';
// Representacion de lo que se va a grabbar en la BBDD

@Schema()
export class Pokemon extends Document{

  //id: string // Mongo me lo da

  @Prop({
    unique: true,
    index: true,
  })
  name: string;
  
  @Prop({
    unique: true,
    index: true,
  })
  no: number;

}

export const PokemonSchema = SchemaFactory.createForClass(Pokemon);
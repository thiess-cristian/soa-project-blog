import { Prop, Schema, SchemaFactory } from "@nestjs/mongoose";
import { Document } from "mongoose";

export type PostDocument = Post & Document;

@Schema()
export class Post {

    @Prop()
    id: number;

    @Prop()
    content: string;

    @Prop()
    title: string

    @Prop()
    creator: string

    @Prop()
    date: string

    @Prop()
    tags: string[]
}

export const PostSchema = SchemaFactory.createForClass(Post);
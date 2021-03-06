import { Prop, Schema, SchemaFactory } from "@nestjs/mongoose";
import { Document } from "mongoose";

export type PostDocument = Post & Document;

@Schema()
export class Post {
    @Prop()
    content: string;

    @Prop()
    title: string

    @Prop()
    author: string

    @Prop()
    date: string

    @Prop()
    tags: string[]
}

export const PostSchema = SchemaFactory.createForClass(Post);
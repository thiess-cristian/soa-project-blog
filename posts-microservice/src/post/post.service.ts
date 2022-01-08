import { Injectable } from '@nestjs/common';
import { InjectModel } from '@nestjs/mongoose';
import { Model } from 'mongoose';
import { Post, PostDocument } from './post.model';
const mongoDb = require("mongodb");

@Injectable()
export class PostService {

    constructor(@InjectModel(Post.name) private readonly postModel: Model<PostDocument>) { }

    async addPost(
        data: any
    ) {
        return new this.postModel(
            {
                title: data.title,
                content: data.content,
                author: data.author,
                date: data.date,
                tags: data.tags
            }
        ).save();
    }

    async getPost(id: string) {
        return this.postModel.findOne({ _id: new mongoDb.ObjectId(id) });
    }

    async getAllPosts() {
        return this.postModel.find().exec();
    }

    async deletePost(id: string) {

        console.log(`delete ${id}`)

        await this.postModel.deleteOne({ _id: new mongoDb.ObjectId(id) });
    }
}

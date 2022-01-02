import { Injectable } from '@nestjs/common';
import { InjectModel } from '@nestjs/mongoose';
import { Model } from 'mongoose';
import { Post, PostDocument } from './post.model';
const mongoDb = require("mongodb");

@Injectable()
export class PostService {

    constructor(@InjectModel(Post.name) private readonly postModel: Model<PostDocument>) { }

    async addPost(
        title: string,
        content: string,
        author: string,
        date: string,
        tags: string[]
    ) {
        return new this.postModel(
            {
                title: title,
                content: content,
                author: author,
                date: date,
                tags: tags
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
        await this.postModel.deleteOne({ _id: new mongoDb.ObjectId(id) });
    }
}

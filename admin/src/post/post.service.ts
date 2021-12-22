import { Injectable } from '@nestjs/common';
import { InjectModel } from '@nestjs/mongoose';
import { Model } from 'mongoose';
import { Post, PostDocument } from './post.model';

@Injectable()
export class PostService {

    constructor(@InjectModel(Post.name) private readonly postModel: Model<PostDocument>) { }

    async addPost(title: string, content: string) {
        return new this.postModel({ title: title, content: content }).save();
    }

    async getPost(id: string) {
        return this.postModel.findOne({ id });
    }

    async getAllPosts() {
        return this.postModel.find().exec();
    }

    async deletePost(id: string) {
        this.postModel.deleteOne({ id });
    }
}

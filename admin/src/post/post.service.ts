import { Injectable } from '@nestjs/common';
import { ClientOptions, ClientProxy, Transport, ClientProxyFactory } from '@nestjs/microservices';
import { InjectModel } from '@nestjs/mongoose';
import { Model } from 'mongoose';
import { Post, PostDocument } from './post.model';
const mongoDb = require("mongodb");

@Injectable()
export class PostService {

    private microservicesOptions: ClientOptions = {
        transport: Transport.TCP,
        options: {
            host: "127.0.0.1",
            port: 3005
        }
    }

    private clientProxy: ClientProxy;

    constructor(@InjectModel(Post.name) private readonly postModel: Model<PostDocument>) {
        this.clientProxy = ClientProxyFactory.create(this.microservicesOptions);
    }

    async addPost(
        title: string,
        content: string,
        author: string,
        date: string,
        tags: string[]
    ) {
        return this.clientProxy.send<any>("add_post", { title, content, author, date, tags });
    }

    async getPost(id: string) {
        return this.clientProxy.send<string>("get_post", id);
    }

    async getAllPosts() {
        return this.clientProxy.send<any>("get_posts", "");
    }

    async deletePost(id: string) {
        await this.postModel.deleteOne({ _id: new mongoDb.ObjectId(id) });
    }
}

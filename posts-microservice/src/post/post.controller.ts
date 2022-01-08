import { Body, Controller, Get, Post, Param, Delete, Req, UnauthorizedException, Logger } from '@nestjs/common';
import { PostService } from './post.service';
import { Response, Request } from 'express';
import { MessagePattern } from '@nestjs/microservices';

@Controller('posts')
export class PostController {

    constructor(private readonly postService: PostService) { }

    @MessagePattern("add_post")
    async addPost(data: any) {
        console.log(`post added`)
        return this.postService.addPost(data);
    }

    @MessagePattern("get_post")
    getPost(id: string) {
        return this.postService.getPost(id);
    }

    @MessagePattern("get_posts")
    getPosts() {
        console.log(`all posts`)
        return this.postService.getAllPosts();
    }

    @MessagePattern("delete_post")
    deletePost(id: string) {

        console.log(`delete ${id}`)

        this.postService.deletePost(id);
    }

    @MessagePattern("test")
    test() {
        console.log("test")
    }

}

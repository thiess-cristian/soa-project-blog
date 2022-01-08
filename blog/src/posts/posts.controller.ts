import { Controller, Delete, Get, Post, Param, Req, Body } from '@nestjs/common';
import { PostsService } from './posts.service';

@Controller('posts')
export class PostsController {
    constructor(private readonly postsService: PostsService) { }

    @Get()
    getPosts() {
        return this.postsService.getPosts();
    }
}

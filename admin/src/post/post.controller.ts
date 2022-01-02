import { Body, Controller, Get, Post, Param, Delete, Req, UnauthorizedException } from '@nestjs/common';
import { PostService } from './post.service';
import { JwtService } from "@nestjs/jwt";
import { Response, Request } from 'express';

@Controller('posts')
export class PostController {

    constructor(private readonly postService: PostService, private jwtService: JwtService) { }

    @Post()
    async addPost(
        @Body("title") title: string,
        @Body("content") content: string,
        @Body("author") author: string,
        @Body("date") date: string,
        @Body("tags") tags: string[],
        @Req() request: Request
    ) {
        return this.postService.addPost(title, content, author, date, tags);
    }

    @Get(":id")
    getPost(@Param("id") id: string) {
        return this.postService.getPost(id);
    }

    @Get()
    getAllPosts() {
        return this.postService.getAllPosts();
    }

    @Delete(":id")
    deletePost(@Param("id") id: string, @Req() request: Request) {
        this.postService.deletePost(id);
    }

}

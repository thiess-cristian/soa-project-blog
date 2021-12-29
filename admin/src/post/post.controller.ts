import { Body, Controller, Get, Post, Param, Delete } from '@nestjs/common';
import { triggerAsyncId } from 'async_hooks';
import { PostService } from './post.service';

@Controller('posts')
export class PostController {

    constructor(private readonly postService: PostService) { }

    @Post()
    addPost(
        @Body("title") title: string,
        @Body("content") content: string,
        @Body("author") author: string,
        @Body("date") date: string,
        @Body("tags") tags: string[]
    ) {
        this.postService.addPost(title, content, author, date, tags);
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
    deletePost(@Param("id") id: string) {
        this.postService.deletePost(id);
    }

}

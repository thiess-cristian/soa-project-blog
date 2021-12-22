import { Body, Controller, Get, Post, Param, Delete } from '@nestjs/common';
import { PostService } from './post.service';

@Controller('post')
export class PostController {

    constructor(private readonly postService: PostService) { }

    @Post()
    addPost(@Body("title") title: string, @Body("content") content: string) {
        this.postService.addPost(title, content);
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

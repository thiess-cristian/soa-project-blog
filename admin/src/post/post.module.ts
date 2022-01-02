import { Module } from '@nestjs/common';
import { PostService } from './post.service';
import { PostController } from './post.controller';
import { MongooseModule } from '@nestjs/mongoose';
import { Post, PostSchema } from './post.model';
import { JwtModule } from "@nestjs/jwt";

@Module({
  imports: [
    MongooseModule.forFeature([{ name: Post.name, schema: PostSchema }]),
    JwtModule.register({
      secret: 'secret',
      signOptions: { expiresIn: '1d' }
    })
  ],
  providers: [PostService],
  controllers: [PostController]
})
export class PostModule { }

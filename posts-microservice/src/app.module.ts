import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { MongooseModule } from '@nestjs/mongoose';
import { AppService } from './app.service';
import { PostModule } from './post/post.module';

const mongoUrl = process.env.MONGO_URL ? process.env.MONGO_URL : "mongodb://localhost:27017/blog"

@Module({
  imports: [
    MongooseModule.forRoot(mongoUrl),
    PostModule],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule { }

import { Module } from '@nestjs/common';
import { MongooseModule } from '@nestjs/mongoose';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { PostModule } from './post/post.module';
import { UserModule } from './user/user.module';

const mongoUrl = process.env.MONGO_URL ? process.env.MONGO_URL : "mongodb://localhost:27017/blog"

@Module({
  imports: [
    MongooseModule.forRoot(mongoUrl),
    PostModule,
    UserModule],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule { }

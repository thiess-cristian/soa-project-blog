import { Module } from '@nestjs/common';
import { MongooseModule } from '@nestjs/mongoose';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { LoginModule } from './login/login.module';
import { PostModule } from './post/post.module';
import { UserModule } from './user/user.module';

@Module({
  imports: [
    MongooseModule.forRoot("mongodb://localhost:27017/blog"),
    LoginModule,
    PostModule,
    UserModule],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule { }

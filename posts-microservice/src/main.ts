import { Logger } from '@nestjs/common';
import { NestFactory } from '@nestjs/core';
import { Transport } from '@nestjs/microservices';
import { AppModule } from './app.module';

const logger = new Logger("Main");

const host = process.env.POSTS_MICROSERVICE ? process.env.POSTS_MICROSERVICE : "localhost"

const microservicesOptions = {
  transport: Transport.TCP,
  options: {
    host: host,
    port: 3005
  }
}

async function bootstrap() {
  const app = await NestFactory.createMicroservice(AppModule, microservicesOptions);
  app.listen().then(() => {
    logger.log("microservice listening")
  })
}
bootstrap();

import { Logger } from '@nestjs/common';
import { Transport } from '@nestjs/microservices';
import { NestFactory } from '@nestjs/core';
import { AppModule } from './app.module';

const logger = new Logger("Main");

const host = process.env.FILTER_MICROSERVICE ? process.env.POSTS_MICROSERVICE : "localhost";

const microservicesOptions = {
  transport: Transport.TCP,
  options: {
    host: host,
    port: 3006
  }
}

async function bootstrap() {
  const app = await NestFactory.createMicroservice(AppModule, microservicesOptions);
  app.listen().then(() => {
    logger.log("filter microservice listening")
  })
}
bootstrap();

import { Logger } from '@nestjs/common';
import { NestFactory } from '@nestjs/core';
import { Transport } from '@nestjs/microservices';
import { AppModule } from './app.module';

const logger = new Logger("Main");

const microservicesOptions = {
  transport: Transport.TCP,
  options: {
    host: "127.0.0.1",
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

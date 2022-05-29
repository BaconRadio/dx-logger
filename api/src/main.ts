import { NestFactory } from '@nestjs/core';
import { ConfigModule } from '@nestjs/config';
import { AppModule } from './app.module';
import { ValidationPipe } from '@nestjs/common';

async function bootstrap() {
  ConfigModule.forRoot({ envFilePath: `.env` })
  const app = await NestFactory.create(AppModule);

  // Global Pipes allows for uses of validation decorators
  // like @isString() inside of dto files 
  app.useGlobalPipes(new ValidationPipe());
  
  await app.listen(process.env.API_PORT);
}
bootstrap();

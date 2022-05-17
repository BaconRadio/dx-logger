import { NestFactory } from '@nestjs/core';
import { ConfigModule } from '@nestjs/config';
import { AppModule } from './app.module';

async function bootstrap() {
  ConfigModule.forRoot({ envFilePath: `.env` })
  const app = await NestFactory.create(AppModule);
  await app.listen(process.env.API_PORT);
}
bootstrap();

import { NestFactory } from '@nestjs/core';
import { AppModule } from './app.module';
import { NestExpressApplication } from '@nestjs/platform-express';

async function bootstrap() {
  const app = await NestFactory.create(AppModule);
  ///const app = await NestFactory.create<NestExpressApplication>(AppModule); // You don't need to specify a type unless you actually want to access the underlying platform API.
  await app.listen(process.env.PORT ?? 3000);
}
bootstrap();

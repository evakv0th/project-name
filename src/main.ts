import { NestFactory } from '@nestjs/core';
import { AppModule } from './app.module';
import { ValidationPipe } from '@nestjs/common';

async function bootstrap() {
  const app = await NestFactory.create(AppModule);

  app.useGlobalPipes(
    new ValidationPipe({
      whitelist: true, // strips unknown properties like "123"
      forbidNonWhitelisted: true, // throws error for unexpected properties
      transform: true, // auto-transforms payloads into DTO instances
    }),
  );
  await app.listen(process.env.PORT ?? 3000);
}
bootstrap();

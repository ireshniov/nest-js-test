import { NestFactory } from '@nestjs/core';
import { SwaggerModule, DocumentBuilder } from '@nestjs/swagger';
import { AppModule } from './app.module';
import { TransformInterceptor } from './transform.interceptor';

async function bootstrap() {
  const app = await NestFactory.create(AppModule);

  const authorOptions = new DocumentBuilder()
    .setTitle('Authors')
    .setDescription('Author API description')
    .setVersion('1.0')
    .addTag('authors')
    .build();
  const authorDocument = SwaggerModule.createDocument(app, authorOptions);
  SwaggerModule.setup('api', app, authorDocument);

  const bookOptions = new DocumentBuilder()
    .setTitle('Books')
    .setDescription('Book API description')
    .setVersion('1.0')
    .addTag('books')
    .build();
  const bookDocument = SwaggerModule.createDocument(app, bookOptions);
  SwaggerModule.setup('api', app, bookDocument);

  app.useGlobalInterceptors(new TransformInterceptor());

  await app.listen(3000);
}

bootstrap();

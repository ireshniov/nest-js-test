import {Module, ValidationPipe} from '@nestjs/common';
import {TypeOrmModule} from '@nestjs/typeorm';
import {APP_INTERCEPTOR, APP_PIPE} from '@nestjs/core';
import {TransformInterceptor} from './transform.interceptor';
import {AuthorModule} from '@author/author.module';
import {Author} from '@author/author.entity';
import {BookModule} from '@book/book.module';
import {Book} from '@book/book.entity';

@Module({
  imports: [
    TypeOrmModule.forRoot({
      // TODO .env + default host, port and etc.
      type: 'mongodb',
      username: 'test',
      password: 'test',
      host: '127.0.0.1',
      port: 27017,
      database: 'task',
      entities: [
        Author,
        Book,
      ],
      synchronize: true,
    }),
    AuthorModule,
    BookModule,
  ],
  providers: [
    {
      provide: APP_PIPE,
      useClass: ValidationPipe,
    },
  ],
  controllers: [],
})
export class AppModule {}

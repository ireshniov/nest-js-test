import { Module } from '@nestjs/common';
import {BookService} from './book.service';
import {BookController} from './book.controller';
import { DatabaseModule } from '@database/database.module';
import { bookProviders } from '@book/book.providers';

@Module({
    imports: [DatabaseModule],
    providers: [BookService, ...bookProviders],
    exports: [BookService, ...bookProviders],
    controllers: [BookController],
})
export class BookModule {}

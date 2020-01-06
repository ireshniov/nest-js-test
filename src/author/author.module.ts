import { Module } from '@nestjs/common';
import {AuthorService} from './author.service';
import {AuthorController} from './author.controller';
import {BookModule} from '@book/book.module';
import {BookService} from '@book/book.service';
import { DatabaseModule } from '@database/database.module';
import { authorProviders } from '@author/author.providers';

@Module({
    imports: [DatabaseModule, BookModule],
    exports: [],
    providers: [AuthorService, BookService, ...authorProviders],
    controllers: [AuthorController],
})
export class AuthorModule {}

import { Module } from '@nestjs/common';
import {AuthorRepository} from './author.repository';
import {TypeOrmModule} from '@nestjs/typeorm';
import {AuthorService} from './author.service';
import {AuthorController} from './author.controller';
import {BookModule} from '../book/book.module';
import {BookService} from '../book/book.service';

@Module({
    imports: [BookModule, TypeOrmModule.forFeature([AuthorRepository])],
    exports: [TypeOrmModule],
    providers: [AuthorService, BookService],
    controllers: [AuthorController],
})
export class AuthorModule {}

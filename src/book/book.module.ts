import { Module } from '@nestjs/common';
import {BookRepository} from './book.repository';
import {TypeOrmModule} from '@nestjs/typeorm';
import {BookService} from './book.service';
import {BookController} from './book.controller';

@Module({
    imports: [TypeOrmModule.forFeature([BookRepository])],
    exports: [TypeOrmModule],
    providers: [BookService],
    controllers: [BookController],
})
export class BookModule {}

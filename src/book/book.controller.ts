import { Body, Controller, Delete, Get, HttpCode, Param, Post, Put, ValidationPipe } from '@nestjs/common';
import {Book} from './book.entity';
import {UpdateBookDto} from './dto/update-book.dto';
import {BookService} from './book.service';
import {CreateBookDto} from './dto/create-book.dto';
import { ApiOperation, ApiResponse, ApiTags } from '@nestjs/swagger';
import { BookByIdPipe } from '@book/book-by-id.pipe';

@Controller('books')
@ApiTags('books')
export class BookController {
    constructor(public bookService: BookService) {
    }

    @Post()
    @HttpCode(201)
    @ApiOperation({ summary: 'Create book' })
    @ApiResponse({
        status: 201,
        description: 'Created book',
        type: Book,
    })
    create(@Body(new ValidationPipe()) createBookDto: CreateBookDto): Promise<Book> {
        return this.bookService.create(createBookDto);
    }

    @Get(':id')
    @ApiOperation({ summary: 'Find book by ID' })
    @ApiResponse({
        status: 200,
        description: 'Found book',
        type: Book
    })
    @ApiResponse({ status: 404, description: 'Book not exists' })
    findOneById(@Param('id', BookByIdPipe) book: Book): Book {
        return book;
    }

    @Put(':id')
    @ApiOperation({ summary: 'Update book by ID' })
    @ApiResponse({
        status: 200,
        description: 'Updated book',
        type: Book
    })
    @ApiResponse({ status: 404, description: 'Book not exists' })
    async updateOneById(@Param('id', BookByIdPipe) book: Book, @Body(new ValidationPipe({skipMissingProperties: true})) updateBookDto: UpdateBookDto): Promise<Book> {
        return this.bookService.update(book, updateBookDto);
    }

    @Delete(':id')
    @HttpCode(204)
    @ApiOperation({ summary: 'Delete book by ID' })
    @ApiResponse({
        status: 204,
        description: 'Deleted book'
    })
    @ApiResponse({ status: 404, description: 'Author not exists' })
    async deleteOneById(@Param('id', BookByIdPipe) book: Book): Promise<void> {
        await this.bookService.delete(book);
    }
}

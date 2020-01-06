import {BadRequestException, Body, Controller, Delete, Get, HttpCode, NotFoundException, Param, Post, Put} from '@nestjs/common';
import {Book} from './book.entity';
import {UpdateBookDto} from './dto/update-book.dto';
import {BookService} from './book.service';
import {CreateBookDto} from './dto/create-book.dto';
import { ApiOperation, ApiResponse, ApiTags } from '@nestjs/swagger';
import { Author } from '@author/author.entity';

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
    create(@Body() createBookDto: CreateBookDto): Promise<Book> {
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
    findOneById(@Param('id') id: string): Promise<Book> {
        return this.getBook(id);
    }

    @Put(':id')
    @ApiOperation({ summary: 'Update book by ID' })
    @ApiResponse({
        status: 200,
        description: 'Updated book',
        type: Book
    })
    @ApiResponse({ status: 404, description: 'Book not exists' })
    async updateOneById(@Param('id') id: string, @Body() updateBookDto: UpdateBookDto): Promise<Book> {
        const book: Book = await this.getBook(id);

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
    async deleteOneById(@Param('id') id: string): Promise<void> {
        const book: Book = await this.getBook(id);

        await this.bookService.delete(book);
    }

    // TODO move in pipe;
    getBook(id: string): Promise<Book> {
        return this.bookService.findOneById(id).then(
            book => {
                if (book === undefined) {
                    throw new NotFoundException();
                }

                return book;
            }, () => {
                throw new BadRequestException();
            });
    }
}

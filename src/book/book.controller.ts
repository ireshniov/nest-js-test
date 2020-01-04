import {BadRequestException, Body, Controller, Delete, Get, HttpCode, NotFoundException, Param, Post, Put} from '@nestjs/common';
import {Book} from './book.entity';
import {UpdateBookDto} from './dto/update-book.dto';
import {BookService} from './book.service';
import {CreateBookDto} from './dto/create-book.dto';

@Controller('books')
export class BookController {
    constructor(public bookService: BookService) {
    }

    @Post()
    @HttpCode(201)
    create(@Body() createBookDto: CreateBookDto): Promise<Book> {
        return this.bookService.create(createBookDto);
    }

    @Get()
    findAll(): Promise<Book[]> {
        return this.bookService.findAll();
    }

    @Get(':id')
    findOneById(@Param('id') id: string): Promise<Book> {
        return this.getBook(id);
    }

    @Put(':id')
    async updateOneById(@Param('id') id: string, @Body() updateBookDto: UpdateBookDto): Promise<Book> {
        const book: Book = await this.getBook(id);

        return this.bookService.update(book, updateBookDto);
    }

    @Delete(':id')
    @HttpCode(204)
    async deleteOneById(@Param('id') id: string): Promise<void> {
        const book: Book = await this.getBook(id);

        await this.bookService.delete(book);
    }

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

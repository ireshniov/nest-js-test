import {BadRequestException, Body, Controller, Delete, Get, HttpCode, NotFoundException, Param, Post, Put} from '@nestjs/common';
import {AuthorService} from './author.service';
import {CreateAuthorDto} from './dto/create-author.dto';
import {UpdateAuthorDto} from './dto/update-author.dto';
import {Author} from './author.entity';
import {Book} from '../book/book.entity';
import {BookService} from '../book/book.service';

@Controller('authors')
export class AuthorController {
    constructor(
        private readonly authorService: AuthorService,
        private readonly bookService: BookService,
    ) {
    }

    @Post()
    @HttpCode(201)
    create(@Body() createAuthorDto: CreateAuthorDto): Promise<Author> {
        return this.authorService.create(createAuthorDto);
    }

    @Get()
    findAll(): Promise<Author[]> {
        return this.authorService.findAll();
    }

    @Get(':id')
    findOneById(@Param('id') id: string): Promise<Author> {
        return this.getAuthor(id);
    }

    @Get(':id/books')
    findAllByAuthorId(@Param('id') id: string): Promise<Book[]> {
        return this.bookService.findAllByAuthorId(id);
    }

    @Put(':id')
    async updateOneById(@Param('id') id: string, @Body() updateAuthorDto: UpdateAuthorDto): Promise<Author> {
        const author: Author = await this.getAuthor(id);

        return this.authorService.update(author, updateAuthorDto);
    }

    @Delete(':id')
    @HttpCode(204)
    async deleteOneById(@Param('id') id: string): Promise<void> {
        const author: Author = await this.getAuthor(id);

        await this.authorService.delete(author);
    }

    getAuthor(id: string): Promise<Author> {
        return this.authorService.findOneById(id).then(
            author => {
                if (author === undefined) {
                    throw new NotFoundException();
                }

                return author;
            }, () => {
                throw new BadRequestException();
            });
    }
}

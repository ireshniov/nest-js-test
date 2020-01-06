import {BadRequestException, Body, Controller, Delete, Get, HttpCode, NotFoundException, Param, Post, Put} from '@nestjs/common';
import {AuthorService} from './author.service';
import {CreateAuthorDto} from './dto/create-author.dto';
import {UpdateAuthorDto} from './dto/update-author.dto';
import {Author} from './author.entity';
import {Book} from '@book/book.entity';
import {BookService} from '@book/book.service';
import {ApiOperation, ApiResponse, ApiTags} from '@nestjs/swagger';

@Controller('authors')
@ApiTags('authors')
export class AuthorController {
    constructor(
        private readonly authorService: AuthorService,
        private readonly bookService: BookService,
    ) {
    }

    @Post()
    @HttpCode(201)
    @ApiOperation({ summary: 'Create author' })
    @ApiResponse({
        status: 201,
        description: 'Created author',
        type: Author,
    })
    create(@Body() createAuthorDto: CreateAuthorDto): Promise<Author> {
        return this.authorService.create(createAuthorDto);
    }

    @Get()
    @ApiOperation({ summary: 'Find authors' })
    @ApiResponse({
        status: 200,
        description: 'Found authors',
        type: Author,
        isArray: true
    })
    findAll(): Promise<Author[]> {
        return this.authorService.findAll();
    }

    @Get(':id')
    @ApiOperation({ summary: 'Find author by ID' })
    @ApiResponse({
        status: 200,
        description: 'Found author',
        type: Author
    })
    @ApiResponse({ status: 404, description: 'Author not exists' })
    findOneById(@Param('id') id: string): Promise<Author> {
        return this.getAuthor(id);
    }

    @Get(':id/books')
    @ApiOperation({ summary: 'Find books by author ID' })
    @ApiResponse({
        status: 200,
        description: 'Found books',
        type: Book,
        isArray: true
    })
    @ApiResponse({ status: 404, description: 'Author not exists' })
    async findAllByAuthorId(@Param('id') id: string): Promise<Book[]> {
        const author: Author = await this.getAuthor(id);

        return this.bookService.findAllByAuthor(author);
    }

    @Put(':id')
    @ApiOperation({ summary: 'Update author by ID' })
    @ApiResponse({
        status: 200,
        description: 'Updated author',
        type: Author
    })
    @ApiResponse({ status: 404, description: 'Author not exists' })
    async updateOneById(@Param('id') id: string, @Body() updateAuthorDto: UpdateAuthorDto): Promise<Author> {
        const author: Author = await this.getAuthor(id);

        return this.authorService.update(author, updateAuthorDto);
    }

    @Delete(':id')
    @HttpCode(204)
    @ApiOperation({ summary: 'Delete author by ID' })
    @ApiResponse({
        status: 204,
        description: 'Deleted author'
    })
    @ApiResponse({ status: 404, description: 'Author not exists' })
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

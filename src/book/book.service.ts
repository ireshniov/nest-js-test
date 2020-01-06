import { Injectable } from '@nestjs/common';
import {BookRepository} from './book.repository';
import {UpdateBookDto} from './dto/update-book.dto';
import {Book} from './book.entity';
import {CreateBookDto} from './dto/create-book.dto';
import { Author } from '@author/author.entity';

@Injectable()
export class BookService {
    constructor(private readonly bookRepository: BookRepository) {}

    create(createBookDto: CreateBookDto): Promise<Book> {
        const book = this.bookRepository.create(createBookDto);
        return this.bookRepository.save(book);
    }

    findAllByAuthor(author: Author): Promise<Book[]> {
        return this.bookRepository.find({
            where: {
                authorId: {$eq: author.id},
            },
        });
    }

    findOneById(id: string): Promise<Book> {
        return this.bookRepository.findOne(id);
    }

    update(book: Book, updateBookDto: UpdateBookDto): Promise<Book> {
        return this.bookRepository.save({...book, ...updateBookDto});
    }

    delete(book: Book): Promise<Book> {
        return this.bookRepository.remove(book);
    }
}

import { Injectable } from '@nestjs/common';
import {AuthorRepository} from './author.repository';
import {CreateAuthorDto} from './dto/create-author.dto';
import {UpdateAuthorDto} from './dto/update-author.dto';
import {Author} from './author.entity';

@Injectable()
export class AuthorService {
    constructor(private readonly authorRepository: AuthorRepository) {}

    create(createAuthorDto: CreateAuthorDto): Promise<Author> {
        const author = this.authorRepository.create(createAuthorDto);
        return this.authorRepository.save(author);
    }

    findAll(): Promise<Author[]> {
        return this.authorRepository.find();
    }

    findOneById(id: number | string): Promise<Author> {
        return this.authorRepository.findOne(id);
    }

    update(author: Author, updateAuthorDto: UpdateAuthorDto): Promise<Author> {
        return this.authorRepository.save({...author, ...updateAuthorDto});
    }

    delete(author: Author): Promise<Author> {
        return this.authorRepository.remove(author);
    }
}

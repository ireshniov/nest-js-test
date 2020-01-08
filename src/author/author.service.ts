import { BadRequestException, Inject, Injectable } from '@nestjs/common';
import {CreateAuthorDto} from './dto/create-author.dto';
import {UpdateAuthorDto} from './dto/update-author.dto';
import {Author} from './author.entity';
import { MongoRepository } from 'typeorm';
import { MongoDBExceptionInterface } from '@common/interfaces/mongodb-exception.interface';

@Injectable()
export class AuthorService {
    constructor(
      @Inject('AUTHOR_REPOSITORY')
      private readonly authorRepository: MongoRepository<Author>
    ) {}

    create(createAuthorDto: CreateAuthorDto): Promise<Author> {
        const author = this.authorRepository.create(createAuthorDto);
        return this.authorRepository.save(author).catch((err: MongoDBExceptionInterface) => {
            throw new BadRequestException(err.errmsg);
        });
    }

    findAll(): Promise<Author[]> {
        return this.authorRepository.find();
    }

    findOneById(id: number | string): Promise<Author> {
        return this.authorRepository.findOne(id);
    }

    update(author: Author, updateAuthorDto: UpdateAuthorDto): Promise<Author> {
        return this.authorRepository.save({...author, ...updateAuthorDto}).catch((err: MongoDBExceptionInterface) => {
            throw new BadRequestException(err.errmsg);
        });
    }

    delete(author: Author): Promise<Author> {
        return this.authorRepository.remove(author);
    }
}

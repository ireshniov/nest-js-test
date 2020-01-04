import {EntityRepository, MongoRepository} from 'typeorm';
import {Book} from './book.entity';

@EntityRepository(Book)
export class BookRepository extends MongoRepository<Book> {}

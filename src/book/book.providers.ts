import { Connection } from 'typeorm';
import { Book } from './book.entity';

export const bookProviders = [
  {
    provide: 'BOOK_REPOSITORY',
    useFactory: (connection: Connection) => connection.getMongoRepository(Book),
    inject: ['MONGODB_CONNECTION'],
  },
];

import { Connection } from 'typeorm';
import { Author } from '@author/author.entity';

export const authorProviders = [
  {
    provide: 'AUTHOR_REPOSITORY',
    useFactory: (connection: Connection) => connection.getMongoRepository(Author),
    inject: ['MONGODB_CONNECTION'],
  },
];

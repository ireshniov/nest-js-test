import { createConnection } from 'typeorm';
import { ConfigService } from '@config/config.service';

export const databaseProviders = [
  {
    provide: 'MONGODB_CONNECTION',
    useFactory: async (configService: ConfigService) => await createConnection({
      type: 'mongodb',
      host: configService.get('DATABASE_HOST'),
      port: parseInt(configService.get('DATABASE_PORT'), 10),
      username: configService.get('DATABASE_USER'),
      password: configService.get('DATABASE_PASSWORD'),
      database: configService.get('DATABASE_NAME'),
      // url: configService.get('DATABASE_URL'),
      entities: [
        __dirname + '/../**/*.entity{.ts,.js}',
      ],
      synchronize: true,
    }),
    inject: [ConfigService],
  },
];

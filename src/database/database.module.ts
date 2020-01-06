import { Module } from '@nestjs/common';
import { ConfigModule } from '@config/config.module';
import { databaseProviders } from '@database/database.providers';

@Module({
  imports: [ConfigModule.register({ folder: './' })],
  providers: [...databaseProviders],
  exports: [...databaseProviders],
})
export class DatabaseModule {}

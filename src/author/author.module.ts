import { Module } from '@nestjs/common';
import {AuthorRepository} from './author.repository';
import {TypeOrmModule} from '@nestjs/typeorm';
import {AuthorService} from './author.service';
import {AuthorController} from './author.controller';

@Module({
    imports: [TypeOrmModule.forFeature([AuthorRepository])],
    exports: [TypeOrmModule],
    providers: [AuthorService],
    controllers: [AuthorController],
})
export class AuthorModule {}

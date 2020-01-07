import { Entity, Column, ObjectID, ObjectIdColumn, CreateDateColumn, UpdateDateColumn, Index } from 'typeorm';
import { ApiProperty } from '@nestjs/swagger';

@Entity({name: 'books'})
export class Book {
    @ObjectIdColumn()
    @ApiProperty({ type: 'string', example: '5e11539a63effe16ddd558b7', description: 'Book ID' })
    id: ObjectID;

    @Column()
    @Index({ unique: true })
    @ApiProperty({ type: 'string', example: 'HarryPotter', description: 'Book title' })
    title: string;

    @Column()
    @ApiProperty({ type: 'string', example: '5e11539a63effe16ddd558b7', description: 'Author ID' })
    authorId: string;

    @Column()
    @ApiProperty({ type: 'string', example: 'here is valid IBAN', description: 'Book IBAN' })
    iBan: string;

    @Column({type: 'datetime' })
    @ApiProperty({ type: 'Date', example: '2020-01-03T00:00:00.001Z', description: 'Book published at' })
    publishedAt: Date;

    @CreateDateColumn()
    @ApiProperty({ type: 'Date', example: '2020-01-03T00:00:00.001Z', description: 'Book create date' })
    createdAt: Date;

    @UpdateDateColumn()
    @ApiProperty({ type: 'Date', example: '2020-01-03T00:00:00.001Z', description: 'Book update date' })
    updatedAt: Date;
}

import {Entity, Column, ObjectID, ObjectIdColumn, CreateDateColumn, UpdateDateColumn} from 'typeorm';
import { ApiProperty } from '@nestjs/swagger';

@Entity({name: 'books'})
export class Book {
    @ObjectIdColumn()
    @ApiProperty({ type: 'string', example: '5e11539a63effe16ddd558b7', description: 'Book ID' })
    id: ObjectID;

    @Column({type: 'varchar' })
    @ApiProperty({ type: 'string', example: 'HarryPotter', description: 'Book title' })
    title: string;

    @Column({type: 'varchar' })
    @ApiProperty({ type: 'string', example: '5e11539a63effe16ddd558b7', description: 'Author ID' })
    authorId: string;

    @Column({type: 'varchar' })
    @ApiProperty({ type: 'string', example: 'here is valid IBAN', description: 'IBAN' })
    iBan: string;

    // TODO date fields;
    // @Column({type: 'datetime' })
    // publishedAt: Date;
    //
    // @CreateDateColumn({type: 'datetime'})
    // createdAt: Date;
    //
    // @UpdateDateColumn({type: 'datetime'})
    // updatedAt: Date;
}

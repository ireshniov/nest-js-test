import { Entity, Column, ObjectID, ObjectIdColumn, CreateDateColumn, UpdateDateColumn } from 'typeorm';
import { ApiProperty } from '@nestjs/swagger';

@Entity({name: 'authors'})
export class Author {
    @ObjectIdColumn()
    @ApiProperty({ type: 'string', example: '5e11539a63effe16ddd558b7', description: 'Author ID' })
    id: ObjectID;

    @Column({type: 'varchar' })
    @ApiProperty({ type: 'string', example: 'Igor', description: 'First name of the Author' })
    firstName: string;

    @Column({type: 'varchar' })
    @ApiProperty({ type: 'string', example: 'Reshniov', description: 'Last name of the Author' })
    lastName: string;

    // TODO date field;
    // @Column({type: 'datetime' })
    // birthday: Date;

    @CreateDateColumn({type: 'datetime'})
    @ApiProperty({ type: 'Date', example: '2020-01-03T00:00:00.001Z', description: 'Author create date' })
    createdAt: Date;

    @UpdateDateColumn({type: 'datetime'})
    @ApiProperty({ type: 'Date', example: '2020-01-03T00:00:00.001Z', description: 'Author update date' })
    updatedAt: Date;
}

import { Entity, Column, ObjectID, ObjectIdColumn, CreateDateColumn, UpdateDateColumn, Index } from 'typeorm';
import { ApiProperty } from '@nestjs/swagger';

@Entity({name: 'authors'})
@Index(["firstName", "lastName"], { unique: true })
export class Author {
    @ObjectIdColumn()
    @ApiProperty({ type: 'string', example: '5e11539a63effe16ddd558b7', description: 'Author ID' })
    id: ObjectID;

    @Column()
    @ApiProperty({ type: 'string', example: 'Igor', description: 'First name of the Author' })
    firstName: string;

    @Column()
    @ApiProperty({ type: 'string', example: 'Reshniov', description: 'Last name of the Author' })
    lastName: string;

    @Column({type: 'datetime' })
    @ApiProperty({ type: 'Date', example: '2020-01-03T00:00:00.001Z', description: 'Author birthday' })
    birthday: Date;

    @CreateDateColumn()
    @ApiProperty({ type: 'Date', example: '2020-01-03T00:00:00.001Z', description: 'Author create date' })
    createdAt: Date;

    @UpdateDateColumn()
    @ApiProperty({ type: 'Date', example: '2020-01-03T00:00:00.001Z', description: 'Author update date' })
    updatedAt: Date;
}

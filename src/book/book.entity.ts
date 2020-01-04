import {Entity, Column, ObjectID, ObjectIdColumn, CreateDateColumn, UpdateDateColumn} from 'typeorm';

@Entity({name: 'books'})
export class Book {
    @ObjectIdColumn()
    id: ObjectID;

    @Column({type: 'varchar' })
    title: string;

    @Column({type: 'varchar' })
    authorId: string;

    @Column({type: 'varchar' })
    iban: string;

    @Column({type: 'datetime' })
    publishedAt: Date;

    @CreateDateColumn({type: 'datetime'})
    createdAt: Date;

    @UpdateDateColumn({type: 'datetime'})
    updatedAt: Date;
}

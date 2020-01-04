import {Entity, Column, ObjectID, ObjectIdColumn, CreateDateColumn, UpdateDateColumn} from 'typeorm';

@Entity({name: 'authors'})
export class Author {
    @ObjectIdColumn()
    id: ObjectID;

    @Column({type: 'varchar' })
    firstName: string;

    @Column({type: 'varchar' })
    lastName: string;

    @Column({type: 'datetime' })
    birthday: Date;

    @CreateDateColumn({type: 'datetime'})
    createdAt: Date;

    @UpdateDateColumn({type: 'datetime'})
    updatedAt: Date;
}

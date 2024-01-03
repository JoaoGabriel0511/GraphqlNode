import { ECatColor } from "../enums/cat";
import {
    Column,
    CreateDateColumn,
    Entity,
    OneToMany,
    PrimaryGeneratedColumn,
    UpdateDateColumn,
  } from 'typeorm';

@Entity('cat', { schema: 'public' })
export default class Cat {
    private static count = 0
    private weithInKg: number;
    @PrimaryGeneratedColumn({
        type: 'int',
        name: 'id',
        comment: 'Cat id',
      })
    id: number;

    @Column('varchar', {
        name: 'name',
        comment: "Cat's name",
        length: 100,
      })
    name: string;

    @Column('enum', {
        name: 'color',
        comment: "Cat's color",
        enum: ECatColor
    })
    color: ECatColor

    @Column('int', {
        name: 'age',
        comment: "Cat's age",
    })
    age: number

    @Column('int', {
        name: 'weith_in_kg',
        comment: "Cat's weith in Kilogramas",
    })
    weith: number

    @CreateDateColumn({
        name: 'created_at',
    })
    createdAt: Date;
    
    @UpdateDateColumn({
       name: 'updated_at',
    })
    updatedAt: Date;

}
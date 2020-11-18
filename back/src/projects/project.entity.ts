import { Entity, Column, PrimaryGeneratedColumn, BeforeInsert } from 'typeorm';

@Entity('projects')
export class ProjectEntity {

    @PrimaryGeneratedColumn()
    id: number;

    @Column()
    nome: string;

    @Column()
    descricao: string;

    @Column()
    datainicio: Date;
    
    @Column()
    dataprevfim: Date;
    
    @Column()
    datafim: Date;
}
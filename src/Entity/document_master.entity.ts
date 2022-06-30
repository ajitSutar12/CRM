import { IsString, MaxLength } from 'class-validator';
import { Entity, Column, PrimaryGeneratedColumn, OneToMany } from 'typeorm';
import { contact_document_master } from './contact_document_master.entity';

@Entity()
export class document_master{
  
    @PrimaryGeneratedColumn()
    dm_code : Number;

    @Column({nullable:true})
    @IsString()
    @MaxLength(40)
    d_name: String;

    @OneToMany(()=> contact_document_master, contact_document_master =>contact_document_master.document_master)
    contact_document_master:contact_document_master[]
}
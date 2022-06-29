import { IsNotEmpty, IsString,MaxLength } from 'class-validator';
import { Entity, Column, PrimaryGeneratedColumn, OneToMany } from 'typeorm';
import { user_menu_access } from './user_menu_access.entity';


@Entity()
export class menu_master {
  
    @PrimaryGeneratedColumn()
    m_code : Number;

    @Column()
    @IsString()
    @MaxLength(40)
    @IsNotEmpty()
    m_name: String;

    @Column()
    @IsString()
    @MaxLength(40)
    @IsNotEmpty()
    m_subname: String;

    @OneToMany(()=> user_menu_access, user_menu_access =>user_menu_access.menu_master)
    user_menu_access:user_menu_access[]
}
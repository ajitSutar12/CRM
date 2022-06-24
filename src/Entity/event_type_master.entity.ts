import { IsString } from 'class-validator';
import { Entity, Column, PrimaryGeneratedColumn, OneToMany } from 'typeorm';


@Entity()
export class event_type_master{
  
    @PrimaryGeneratedColumn()
    etm_code : Number;

    @Column({nullable:true})
    @IsString()
    event_type: String;

    // @OneToMany(()=> user_menu_access, user_menu_access =>user_menu_access.menu_master)
    // user_menu_access:user_menu_access[]
}
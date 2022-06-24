import { IsString } from 'class-validator';
import { Entity, Column, PrimaryGeneratedColumn, OneToMany } from 'typeorm';


@Entity()
export class call_status_master{
  
    @PrimaryGeneratedColumn()
    csm_code : Number;

    @Column({nullable:true})
    @IsString()
    call_status: String;

    // @OneToMany(()=> user_menu_access, user_menu_access =>user_menu_access.menu_master)
    // user_menu_access:user_menu_access[]
}
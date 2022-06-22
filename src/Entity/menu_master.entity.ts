import { ApiProperty } from '@nestjs/swagger';
import { IsNotEmpty, IsString } from 'class-validator';
import { Entity, Column, PrimaryGeneratedColumn, OneToMany } from 'typeorm';
import { user_menu_access } from './user_menu_access.entity';


@Entity()
export class menu_master {
  
    @ApiProperty({
        type: Number,
        description : "Menu ID"
    })
    @PrimaryGeneratedColumn()
    m_code : Number;

    @ApiProperty({
        type: String,
        description : "Menu Name"
    })
    @Column()
    @IsString()
    @IsNotEmpty()
    m_name: String;

    @ApiProperty({
        type: String,
        description : "Menu Sub Name"
    })
    @Column()
    @IsString()
    @IsNotEmpty()
    m_subname: String;

    @OneToMany(()=> user_menu_access, user_menu_access =>user_menu_access.menu_master)
    user_menu_access:user_menu_access[]
}
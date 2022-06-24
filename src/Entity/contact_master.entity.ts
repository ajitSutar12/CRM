import { ApiProperty } from '@nestjs/swagger';
import { IsDate, IsEmail, IsNotEmpty, IsNumber, IsString } from 'class-validator';
import { Entity, Column, PrimaryGeneratedColumn, OneToMany } from 'typeorm';
import { notes_manage } from './notes_manage.entity';


@Entity()
export class contact_master {

    @PrimaryGeneratedColumn()
    c_code : Number;

    @Column({nullable:true})
    @IsString()
    c_first_name: String;

    @Column({nullable:true})
    @IsString()
    c_last_name: String;

    @Column({nullable:true})
    @IsString()
    c_name: String;

    @Column({nullable:true})
    @IsString()
    c_number: String;

    @Column({nullable:true})
    @IsEmail()
    c_email: String;

    @Column({nullable:true})
    @IsString()
    c_tags: String;

    @Column({nullable:true})
    @IsString()
    c_designation: string;

    @Column({nullable:true})
    @IsNumber()
    c_csc_code: Number;

    @Column({nullable:true})
    @IsString()
    c_c_address: String;

    @Column({nullable:true})
    @IsString()
    c_website: String;

    @Column()
    @IsNumber()
    @IsNotEmpty()
    created_by: Number;

    @Column()
    @IsDate()
    @IsNotEmpty()
    created_timestamp: Date;

    @Column()
    @IsNumber()
    @IsNotEmpty()
    updated_by: Number;

    @Column()
    @IsDate()
    @IsNotEmpty()
    updated_timestamp: Date;

    @OneToMany(()=> notes_manage, notes_manage =>notes_manage.contact_master)
    notes_manage:notes_manage[]
}
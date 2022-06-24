import { ApiProperty } from '@nestjs/swagger';
import { IsDate, IsNotEmpty, IsNumber, IsString } from 'class-validator';
import { Entity, Column, PrimaryGeneratedColumn } from 'typeorm';


@Entity()
export class company_master {
  
    @PrimaryGeneratedColumn()
    company_code : Number;

    @Column({length:"2"})
    @IsString()
    @IsNotEmpty()
    company_name: String;

    @Column()
    @IsString()
    @IsNotEmpty()
    company_contact: String;

    @Column()
    @IsString()
    @IsNotEmpty()
    company_email: String;

    @Column()
    @IsString()
    @IsNotEmpty()
    company_address: String;

    @Column()
    @IsString()
    @IsNotEmpty()
    name_format: String;

    @Column()
    @IsString()
    @IsNotEmpty()
    date_format: String;

    @Column()
    @IsString()
    @IsNotEmpty()
    calendar_week: string;

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
}
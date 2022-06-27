import { IsDate, IsNotEmpty, IsNumber, IsString } from 'class-validator';
import { Entity, Column, PrimaryGeneratedColumn } from 'typeorm';

@Entity()
export class company_master {
  
    @PrimaryGeneratedColumn()
    company_code : Number;

    @Column({length:200})
    @IsString()
    @IsNotEmpty()
    company_name: String;

    @Column({length:30})
    @IsString()
    @IsNotEmpty()
    company_contact: String;

    @Column({length:50})
    @IsString()
    @IsNotEmpty()
    company_email: String;

    @Column({length:255})
    @IsString()
    @IsNotEmpty()
    company_address: String;

    @Column({length:60})
    @IsString()
    @IsNotEmpty()
    name_format: String;

    @Column({length:40})
    @IsString()
    @IsNotEmpty()
    date_format: String;

    @Column({length:60})
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
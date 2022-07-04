import { IsDate, IsNotEmpty, IsNumber, IsString, MaxLength } from 'class-validator';
import { Entity, Column, PrimaryGeneratedColumn } from 'typeorm';

@Entity()
export class company_master {
  
    @PrimaryGeneratedColumn()
    company_code : Number;

    @Column()
    @IsString()
    @IsNotEmpty()
    @MaxLength(200)
    company_name: String;

    @Column()
    @IsString()
    @IsNotEmpty()
    @MaxLength(30)
    company_contact: String;

    @Column()
    @IsString()
    @IsNotEmpty()
    @MaxLength(50)
    company_email: String;

    @Column()
    @IsString()
    @IsNotEmpty()
    @MaxLength(255)
    company_address: String;

    @Column()
    @IsString()
    @IsNotEmpty()
    @MaxLength(60)
    name_format: String;

    @Column()
    @IsString()
    @IsNotEmpty()
    @MaxLength(40)
    date_format: String;

    @Column()
    @IsString()
    @IsNotEmpty()
    @MaxLength(60)
    calendar_week: string;

    @Column()
    @IsNumber()
    @IsNotEmpty()
    created_by: Number;

    @Column()
    @IsNotEmpty()
    created_timestamp: Date;

    @Column()
    @IsNumber()
    @IsNotEmpty()
    updated_by: Number;

    @Column()
    @IsNotEmpty()
    updated_timestamp: Date;

    @Column({default:0})
    status: number
}
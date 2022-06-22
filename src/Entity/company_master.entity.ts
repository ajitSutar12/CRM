import { ApiProperty } from '@nestjs/swagger';
import { IsDate, IsNotEmpty, IsNumber, IsString } from 'class-validator';
import { Entity, Column, PrimaryGeneratedColumn } from 'typeorm';


@Entity()
export class company_master {
  
    @ApiProperty({
        type: Number,
        description : "Company ID"
    })
    @PrimaryGeneratedColumn()
    company_code : Number;

    @ApiProperty({
        type: String,
        description : "Company Name"
    })
    @Column()
    @IsString()
    @IsNotEmpty()
    company_name: String;

    @ApiProperty({
        type: String,
        description : "Company Contact"
    })
    @Column()
    @IsString()
    @IsNotEmpty()
    company_contact: String;

    @ApiProperty({
        type: String,
        description : "Company Email"
    })
    @Column()
    @IsString()
    @IsNotEmpty()
    company_email: String;

    @ApiProperty({
        type: String,
        description : "Company Address"
    })
    @Column()
    @IsString()
    @IsNotEmpty()
    company_address: String;

    @ApiProperty({
        type: String,
        description : "Name Format"
    })
    @Column()
    @IsString()
    @IsNotEmpty()
    name_format: String;

    @ApiProperty({
        type: String,
        description : "Date Format"
    })
    @Column()
    @IsString()
    @IsNotEmpty()
    date_format: String;

    @ApiProperty({
        type: String,
        description : "Calendar Week"
    })
    @Column()
    @IsString()
    @IsNotEmpty()
    calendar_week: string;

    @ApiProperty({
        type: Number,
        description : "Created By User Id"
    })
    @Column()
    @IsNumber()
    @IsNotEmpty()
    created_by: Number;

    @ApiProperty({
        type: Date,
        description : "Created Timestamp"
    })

    @Column()
    @IsDate()
    @IsNotEmpty()
    created_timestamp: Date;

    @ApiProperty({
        type: Number,
        description : "Updated By User Id"
    })
    @Column()
    @IsNumber()
    @IsNotEmpty()
    updated_by: Number;

    @ApiProperty({
        type: Date,
        description : "Updated Timestamp"
    })
    @Column()
    @IsDate()
    @IsNotEmpty()
    updated_timestamp: Date;
}
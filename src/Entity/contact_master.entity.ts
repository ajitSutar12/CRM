import { ApiProperty } from '@nestjs/swagger';
import { IsDate, IsEmail, IsNotEmpty, IsNumber, IsString } from 'class-validator';
import { Entity, Column, PrimaryGeneratedColumn } from 'typeorm';


@Entity()
export class contact_master {
  
    @ApiProperty({
        type: Number,
        description : "Contact ID"
    })
    @PrimaryGeneratedColumn()
    c_code : Number;

    @ApiProperty({
        type: String,
        description : "Contact First Name"
    })
    @Column({nullable:true})
    @IsString()
    c_first_name: String;

    @ApiProperty({
        type: String,
        description : "Contact Last Name"
    })
    @Column({nullable:true})
    @IsString()
    c_last_name: String;

    @ApiProperty({
        type: String,
        description : "Company Name"
    })
    @Column({nullable:true})
    @IsString()
    c_name: String;

    @ApiProperty({
        type: String,
        description : "Contact Number"
    })
    @Column({nullable:true})
    @IsString()
    c_number: String;

    @ApiProperty({
        type: String,
        description : "Contact Email"
    })
    @Column({nullable:true})
    @IsEmail()
    c_email: String;

    @ApiProperty({
        type: String,
        description : "Tags"
    })
    @Column({nullable:true})
    @IsString()
    c_tags: String;

    @ApiProperty({
        type: String,
        description : "Contact Designation"
    })
    @Column({nullable:true})
    @IsString()
    c_designation: string;

    @ApiProperty({
        type: Number,
        description : "Contact Company Country State City Code"
    })
    @Column({nullable:true})
    @IsNumber()
    c_csc_code: Number;

    @ApiProperty({
        type: String,
        description : "Contact Company Address"
    })
    @Column({nullable:true})
    @IsString()
    c_c_address: String;

    @ApiProperty({
        type: String,
        description : "Contact Website"
    })
    @Column({nullable:true})
    @IsString()
    c_website: String;

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
        description : "Created timestamp"
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
        description : "updated timestamp"
    })
    @Column()
    @IsDate()
    @IsNotEmpty()
    updated_timestamp: Date;
}
import { ApiProperty } from '@nestjs/swagger';
import { IsNotEmpty, IsString } from 'class-validator';
import { Entity, Column, PrimaryGeneratedColumn } from 'typeorm';


@Entity()
export class country_state_city {
  
    @ApiProperty({
        type: Number,
        description : "CSC ID"
    })
    @PrimaryGeneratedColumn()
    csc_code : Number;

    @ApiProperty({
        type: String,
        description : "Country"
    })
    @Column({nullable:true})
    @IsString()
    country_name: String;

    @ApiProperty({
        type: String,
        description : "State"
    })
    @Column({nullable:true})
    @IsString()
    state_name: String;

    @ApiProperty({
        type: String,
        description : "City"
    })
    @Column({nullable:true})
    @IsString()
    city_name: String;
}
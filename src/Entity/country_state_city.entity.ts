import { ApiProperty } from '@nestjs/swagger';
import { IsNotEmpty, IsString } from 'class-validator';
import { Entity, Column, PrimaryGeneratedColumn } from 'typeorm';


@Entity()
export class country_state_city {
  
    @PrimaryGeneratedColumn()
    csc_code : Number;

    @Column({nullable:true})
    @IsString()
    country_name: String;

    @Column({nullable:true})
    @IsString()
    state_name: String;

    @Column({nullable:true})
    @IsString()
    city_name: String;
}
import { IsString, MaxLength } from 'class-validator';
import { Entity, Column, PrimaryGeneratedColumn } from 'typeorm';


@Entity()
export class country_state_city {
  
    @PrimaryGeneratedColumn()
    csc_code : Number;

    @Column({nullable:true})
    @IsString()
    @MaxLength(40)
    country_name: String;

    @Column({nullable:true})
    @IsString()
    @MaxLength(40)
    state_name: String;

    @Column({nullable:true})
    @IsString()
    @MaxLength(40)
    city_name: String;
}
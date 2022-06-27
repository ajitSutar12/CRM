import { IsString } from 'class-validator';
import { Entity, Column, PrimaryGeneratedColumn } from 'typeorm';


@Entity()
export class country_state_city {
  
    @PrimaryGeneratedColumn()
    csc_code : Number;

    @Column({nullable:true, length:40})
    @IsString()
    country_name: String;

    @Column({nullable:true, length:40})
    @IsString()
    state_name: String;

    @Column({nullable:true, length:40})
    @IsString()
    city_name: String;
}
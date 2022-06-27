import { IsNotEmpty, IsNumber, IsString } from 'class-validator';
import { Entity, Column, PrimaryGeneratedColumn, OneToMany } from 'typeorm';
import { product_master } from './product_master.entity';


@Entity()
export class unit_master {

    @PrimaryGeneratedColumn()
    u_code : Number;

    @Column({length:20})
    @IsString()
    @IsNotEmpty()
    u_name: String;

    @Column()
    @IsNumber()
    @IsNotEmpty()
    u_status: Number;

    @OneToMany(()=> product_master, product_master =>product_master.unit_master)
    product_master:product_master[]
}
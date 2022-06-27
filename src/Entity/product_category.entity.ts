import { IsNotEmpty, IsNumber, IsString } from 'class-validator';
import { Entity, Column, PrimaryGeneratedColumn, OneToMany } from 'typeorm';
import { product_master } from './product_master.entity';


@Entity()
export class product_category{
 
    @PrimaryGeneratedColumn()
    pc_code : Number;

    @Column({nullable:true, length:30})
    @IsString()
    pc: String;

    @Column()
    @IsNumber()
    @IsNotEmpty()
    p_status: Number;

    @OneToMany(()=> product_master, product_master =>product_master.product_category)
    product_master:product_master[]

}
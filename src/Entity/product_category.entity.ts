import { IsNotEmpty, IsNumber, IsString,MaxLength } from 'class-validator';
import { Entity, Column, PrimaryGeneratedColumn, OneToMany } from 'typeorm';
import { product_master } from './product_master.entity';


@Entity()
export class product_category{
 
    @PrimaryGeneratedColumn()
    pc_code : Number;

    @Column({nullable:true})
    @IsString()
    @MaxLength(30)
    pc: String;

    @Column()
    @IsNumber()
    @IsNotEmpty()
    p_status: Number;

    @Column({default:0})
    status: number

    @OneToMany(()=> product_master, product_master =>product_master.product_category)
    product_master:product_master[]

}
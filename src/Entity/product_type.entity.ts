import { IsNotEmpty, IsNumber, IsString ,MaxLength} from 'class-validator';
import { Entity, Column, PrimaryGeneratedColumn, OneToMany } from 'typeorm';
import { product_master } from './product_master.entity';


@Entity()
export class product_type{

    @PrimaryGeneratedColumn()
    pt_code : Number;

    @Column({nullable:true})
    @IsString()
    @MaxLength(30)
    pt: String;

    @Column()
    @IsNumber()
    @IsNotEmpty()
    p_status: Number;

    @OneToMany(()=> product_master, product_master =>product_master.product_type)
    product_master:product_master[]
}
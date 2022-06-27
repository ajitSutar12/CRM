import { IsDate, IsNotEmpty, IsNumber, IsString } from 'class-validator';
import { Entity, Column, PrimaryGeneratedColumn, ManyToOne, JoinColumn } from 'typeorm';
import { product_master } from './product_master.entity';

@Entity()
export class product_rate_master {
 
    @PrimaryGeneratedColumn()
    pr_code : Number;

    @Column({nullable:true})
    @IsNumber()
    p_code: Number;

    @Column({nullable:true, length:11})
    @IsString()
    p_rate: String;

    @Column({nullable:true})
    @IsDate()
    date: Date;

    @Column()
    @IsNumber()
    @IsNotEmpty()
    pr_status: Number;

    @Column()
    @IsNumber()
    @IsNotEmpty()
    created_by: Number;

    @Column()
    @IsDate()
    @IsNotEmpty()
    created_timestamp: Date;

    @Column()
    @IsNumber()
    @IsNotEmpty()
    updated_by: Number;

    @Column()
    @IsDate()
    @IsNotEmpty()
    updated_timestamp: Date;

    @ManyToOne(() => product_master, product_master =>product_master.product_rate_master)
    @JoinColumn({name:"p_code"})
    product_master:product_master[]

}
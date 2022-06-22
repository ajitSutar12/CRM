import { ApiProperty } from '@nestjs/swagger';
import { IsNotEmpty, IsNumber, IsString } from 'class-validator';
import { Entity, Column, PrimaryGeneratedColumn, OneToMany } from 'typeorm';
import { product_master } from './product_master.entity';


@Entity()
export class product_category{
  
    @ApiProperty({
        type: Number,
        description : "Product Category ID"
    })
    @PrimaryGeneratedColumn()
    pc_code : Number;

    @ApiProperty({
        type: String,
        description : "Product Category"
    })
    @Column({nullable:true})
    @IsString()
    pc: String;

    @ApiProperty({
        type: Number,
        description : "Status"
    })
    @Column()
    @IsNumber()
    @IsNotEmpty()
    p_status: Number;

    @OneToMany(()=> product_master, product_master =>product_master.product_category)
    product_master:product_master[]

}
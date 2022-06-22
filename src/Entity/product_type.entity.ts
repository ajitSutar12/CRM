import { ApiProperty } from '@nestjs/swagger';
import { IsNotEmpty, IsNumber, IsString } from 'class-validator';
import { Entity, Column, PrimaryGeneratedColumn, OneToMany } from 'typeorm';
import { product_master } from './product_master.entity';


@Entity()
export class product_type{
  
    @ApiProperty({
        type: Number,
        description : "Product Type ID"
    })
    @PrimaryGeneratedColumn()
    pt_code : Number;

    @ApiProperty({
        type: String,
        description : "Product Type"
    })
    @Column({nullable:true})
    @IsString()
    pt: String;

    @ApiProperty({
        type: Number,
        description : "Status"
    })
    @Column()
    @IsNumber()
    @IsNotEmpty()
    p_status: Number;

    @OneToMany(()=> product_master, product_master =>product_master.product_type)
    product_master:product_master[]
}
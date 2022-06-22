import { ApiProperty } from '@nestjs/swagger';
import { IsNotEmpty, IsNumber, IsString } from 'class-validator';
import { Entity, Column, PrimaryGeneratedColumn, OneToMany } from 'typeorm';
import { product_master } from './product_master.entity';


@Entity()
export class unit_master {
  
    @ApiProperty({
        type: Number,
        description : "Unit ID"
    })
    @PrimaryGeneratedColumn()
    u_code : Number;

    @ApiProperty({
        type: String,
        description : "Unit Name"
    })
    @Column()
    @IsString()
    @IsNotEmpty()
    u_name: String;

    @ApiProperty({
        type: Number,
        description : "Status"
    })
    @Column()
    @IsNumber()
    @IsNotEmpty()
    u_status: Number;

    @OneToMany(()=> product_master, product_master =>product_master.unit_master)
    product_master:product_master[]
}
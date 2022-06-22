import { ApiProperty } from '@nestjs/swagger';
import { IsDate, IsNotEmpty, IsNumber, IsString } from 'class-validator';
import { Entity, Column, PrimaryGeneratedColumn, ManyToOne, JoinColumn } from 'typeorm';
import { product_master } from './product_master.entity';

@Entity()
export class product_rate_master {
  
    @ApiProperty({
        type: Number,
        description : "Product Rate ID"
    })
    @PrimaryGeneratedColumn()
    pr_code : Number;

    @ApiProperty({
        type: Number,
        description : "Product ID"
    })
    @Column({nullable:true})
    @IsNumber()
    p_code: Number;

    @ApiProperty({
        type: String,
        description : "Rate"
    })
    @Column({nullable:true})
    @IsString()
    p_rate: String;

    @ApiProperty({
        type: Date,
        description : "Rate Effective From"
    })
    @Column({nullable:true})
    @IsDate()
    date: Date;

    @ApiProperty({
        type: Number,
        description : "Status"
    })
    @Column()
    @IsNumber()
    @IsNotEmpty()
    pr_status: Number;

    @ApiProperty({
        type: Number,
        description : "Created By User Id"
    })
    @Column()
    @IsNumber()
    @IsNotEmpty()
    created_by: Number;

    @ApiProperty({
        type: Date,
        description : "Created Timestamp"
    })
    @Column()
    @IsDate()
    @IsNotEmpty()
    created_timestamp: Date;

    @ApiProperty({
        type: Number,
        description : "Updated By User Id"
    })
    @Column()
    @IsNumber()
    @IsNotEmpty()
    updated_by: Number;

    @ApiProperty({
        type: Date,
        description : "Updated Timestamp"
    })
    @Column()
    @IsDate()
    @IsNotEmpty()
    updated_timestamp: Date;

    @ManyToOne(() => product_master, product_master =>product_master.product_rate_master)
    @JoinColumn({name:"p_code"})
    product_master:product_master[]

}
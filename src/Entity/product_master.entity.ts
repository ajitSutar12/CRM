import { ApiProperty } from '@nestjs/swagger';
import { IsDate, IsNotEmpty, IsNumber, IsString } from 'class-validator';
import { Entity, Column, PrimaryGeneratedColumn, ManyToOne, JoinColumn, OneToMany } from 'typeorm';
import { product_category } from './product_category.entity';
import { product_rate_master } from './product_rate_master.entity';
import { product_type } from './product_type.entity';
import { unit_master } from './unit_master.entity';


@Entity()
export class product_master {

    @PrimaryGeneratedColumn()
    p_code : Number;

    @Column()
    @IsString()
    @IsNotEmpty()
    p: String;

    @Column()
    @IsNumber()
    @IsNotEmpty()
    pc_code: Number;

    @Column()
    @IsNumber()
    @IsNotEmpty()
    pt_code: Number;

    @Column()
    @IsNumber()
    @IsNotEmpty()
    p_unit: Number;

    @Column()
    @IsString()
    @IsNotEmpty()
    p_image: String;

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

    @ManyToOne(() => product_category, product_category =>product_category.product_master)
    @JoinColumn({name:"pc_code"})
    product_category:product_category[]

    @ManyToOne(() => product_type, product_type =>product_type.product_master)
    @JoinColumn({name:"pt_code"})
    product_type:product_type[]

    @ManyToOne(() => unit_master, unit_master =>unit_master.product_master)
    @JoinColumn({name:"p_unit"})
    unit_master:unit_master[]

    @OneToMany(()=> product_rate_master, product_rate_master =>product_rate_master.product_master)
    product_rate_master:product_rate_master[]
}
import { IsNotEmpty, IsNumber, IsString } from "class-validator";
import { Column, Entity, JoinColumn, ManyToOne, OneToMany, PrimaryGeneratedColumn } from "typeorm";
import { deal_master } from "./deal_master.entity";
import { product_master } from "./product_master.entity";

@Entity()
export class deal_master_product_mapping{
    @PrimaryGeneratedColumn({type:"int"})
    @IsNotEmpty()
    dmpm_code:Number;

    @Column({nullable:true,type:"int"})
    @IsNumber()
    deal_code:Number;

    @Column({nullable:true,type:"int"})
    @IsNumber()
    product_code:Number;

    @Column({nullable:true,type:"int"})
    @IsNumber()
    product_qty:Number;

    @Column({nullable:true,type:"varchar",length:20})
    @IsString()
    product_rate:String;
    
    @Column({type:"int"})
    @IsNumber()
    @IsNotEmpty()
    created_by:Number;

    @Column()
    @IsNotEmpty()
    created_timestamp:Date;

    @Column({type:"int"})
    @IsNumber()
    @IsNotEmpty()
    updated_by:Number;

    @Column()
    @IsNotEmpty()
    updated_timestamp:Date;

    @ManyToOne(() => deal_master, deal_master =>deal_master.deal_master_product_mapping)
    @JoinColumn({name:"deal_code"})
    deal_master:deal_master[]

    @ManyToOne(() => product_master, product_master =>product_master.deal_master_product_mapping)
    @JoinColumn({name:"product_code"})
    product_master:product_master[]

   

}
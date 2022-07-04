import { IsNotEmpty, IsNumber, IsString, MaxLength } from "class-validator";
import { Column, Entity, JoinColumn, ManyToOne, PrimaryGeneratedColumn } from "typeorm";
import { deal_master } from "./deal_master.entity";
import { product_master } from "./product_master.entity";

@Entity()
export class deal_master_product_mapping{
    @PrimaryGeneratedColumn()
    @IsNotEmpty()
    dmpm_code:Number;

    @Column({nullable:true})
    @IsNumber()
    deal_code:Number;

    @Column({nullable:true})
    @IsNumber()
    product_code:Number;

    @Column({nullable:true})
    @IsNumber()
    product_qty:Number;

    @Column({nullable:true})
    @IsString()
    @MaxLength(20)
    product_rate:String;
    
    @Column()
    @IsNumber()
    @IsNotEmpty()
    created_by:Number;

    @Column()
    @IsNotEmpty()
    created_timestamp:Date;

    @Column()
    @IsNumber()
    @IsNotEmpty()
    updated_by:Number;

    @Column()
    @IsNotEmpty()
    updated_timestamp:Date;

    @Column({default:0})
    status: number

    @ManyToOne(() => deal_master, deal_master =>deal_master.deal_master_product_mapping)
    @JoinColumn({name:"deal_code"})
    deal_master:deal_master[]

    @ManyToOne(() => product_master, product_master =>product_master.deal_master_product_mapping)
    @JoinColumn({name:"product_code"})
    product_master:product_master[]

}
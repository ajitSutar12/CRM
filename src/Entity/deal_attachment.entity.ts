import { IsNotEmpty, IsNumber, IsString } from "class-validator";
import { Column, Entity, JoinColumn, ManyToOne, PrimaryGeneratedColumn } from "typeorm";
import { deal_master } from "./deal_master.entity";

@Entity()
export class deal_attachment{
    @PrimaryGeneratedColumn({type:"int"})
    @IsNotEmpty()
    da_code:Number;

    @Column({nullable:true,type:"int"})
    @IsNumber()
    deal_code:Number;

    @Column({nullable:true,type:"varchar",length:150})
    @IsString()
    attachment_name:String;

    @Column({nullable:true,type:"varchar",length:200})
    @IsString()
    attachment_path:String;

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

    @ManyToOne(() => deal_master, deal_master =>deal_master.deal_attachment)
    @JoinColumn({name:"deal_code"})
    deal_master:deal_master[]

}
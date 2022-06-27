import { IsDate, IsNotEmpty, IsNumber, IsString } from "class-validator";
import { Column, Entity, JoinColumn, ManyToOne, PrimaryGeneratedColumn } from "typeorm";
import { contact_master } from "./contact_master.entity";
import { deal_master } from "./deal_master.entity";

@Entity()
export class notes_management_deal{
    @PrimaryGeneratedColumn({type:"int"})
    notes_code:Number;

    @Column({nullable:true,type:"varchar",length:200})
    @IsString()
    notes_subject:String;

    @Column({nullable:true,type:"varchar",length:500})
    @IsString()
    note_content:String;

    @Column({nullable:true,type:"int"})
    @IsNumber()
    contact_id:Number;

    @Column({nullable:true,type:"int"})
    @IsNumber()
    deal_id:Number;

    @Column({type:"int"})
    @IsNotEmpty()
    @IsNumber()
    created_by:Number;

    @Column()
    @IsNotEmpty()
    @IsDate()
    created_timestamp:Date;

    @Column({type:"int"})
    @IsNotEmpty()
    @IsNumber()
    updated_by:Number;

    @Column()
    @IsNotEmpty()
    @IsDate()
    updated_timestamp:Date;

    @ManyToOne(() => deal_master, deal_master =>deal_master.notes_management_deal)
    @JoinColumn({name:"deal_id"})
    deal_master:deal_master[]

    @ManyToOne(() => contact_master, contact_master =>contact_master.notes_management_deal)
    @JoinColumn({name:"contact_id"})
    contact_master:contact_master[]
}
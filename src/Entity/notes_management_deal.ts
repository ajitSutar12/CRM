import { IsDate, IsNotEmpty, IsNumber, IsString,MaxLength } from "class-validator";
import { Column, Entity, JoinColumn, ManyToOne, PrimaryGeneratedColumn } from "typeorm";
import { contact_master } from "./contact_master.entity";
import { deal_master } from "./deal_master.entity";

@Entity()
export class notes_management_deal{
    @PrimaryGeneratedColumn({type:"int"})
    notes_code:Number;

    @Column({nullable:true})
    @IsString()
    @MaxLength(200)
    notes_subject:String;

    @Column({nullable:true})
    @IsString()
    @MaxLength(500)
    note_content:String;

    @Column({nullable:true})
    @IsNumber()
    contact_id:Number;

    @Column({nullable:true})
    @IsNumber()
    deal_id:Number;

    @Column()
    @IsNotEmpty()
    @IsNumber()
    created_by:Number;

    @Column()
    @IsNotEmpty()
    created_timestamp:Date;

    @Column()
    @IsNotEmpty()
    @IsNumber()
    updated_by:Number;

    @Column()
    @IsNotEmpty()
    updated_timestamp:Date;

    @Column({default:0})
    status: number

    @ManyToOne(() => deal_master, deal_master =>deal_master.notes_management_deal)
    @JoinColumn({name:"deal_id"})
    deal_master:deal_master[]

    @ManyToOne(() => contact_master, contact_master =>contact_master.notes_management_deal)
    @JoinColumn({name:"contact_id"})
    contact_master:contact_master[]
}
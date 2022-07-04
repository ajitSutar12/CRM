import { IsNotEmpty, IsNumber, IsString, MaxLength } from "class-validator";
import { Column, Entity, JoinColumn, ManyToOne, PrimaryGeneratedColumn } from "typeorm";
import { contact_master } from "./contact_master.entity";
import { deal_master } from "./deal_master.entity";
import { document_master } from "./document_master.entity";

@Entity()
export class contact_document_master{

    @PrimaryGeneratedColumn()
    cdm_code:Number;

    @Column({nullable:true})
    @IsNumber()
    c_id:Number;

    @Column({nullable:true})
    @IsNumber()
    d_id:Number;

    @Column({nullable:true})
    @IsNumber()
    deal_id:Number;

    @Column({nullable:true})
    @IsString()
    @MaxLength(150)
    attachment:String;
  
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

    @ManyToOne(() => contact_master, contact_master =>contact_master.contact_document_master)
    @JoinColumn({name:"c_id"})
    contact_master :contact_master[]

    @ManyToOne(() => document_master, document_master =>document_master.contact_document_master)
    @JoinColumn({name:"d_id"})
    document_master :document_master[]

    @ManyToOne(() => deal_master, deal_master =>deal_master.contact_document_master)
    @JoinColumn({name:"deal_id"})
    deal_master :deal_master[]
}
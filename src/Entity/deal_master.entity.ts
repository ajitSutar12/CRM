import { IsNotEmpty, IsNumber, IsString, MaxLength } from "class-validator";
import { Column, Entity, JoinColumn, ManyToOne, OneToMany, PrimaryGeneratedColumn } from "typeorm";
import { contact_document_master } from "./contact_document_master.entity";
import { contact_master } from "./contact_master.entity";
import { deal_attachment } from "./deal_attachment.entity";
import { deal_master_Milestone_mapping } from "./deal_master_milestoneMapping";
import { deal_master_product_mapping } from "./deal_master_product_mapping";
import { deal_milestone_master } from "./deal_milestone_master";
import { notes_management_deal } from "./notes_management_deal";
import { task_management } from "./task_management.entity";
@Entity()
export class deal_master{
    @PrimaryGeneratedColumn()
    @IsNotEmpty()
    deal_code:Number;

    @Column({nullable:true})
    @IsNumber()
    contact_id:Number;

    @Column({nullable:true})
    @IsString()
    @MaxLength(50)
    deal_name:String;

    @Column({nullable:true})
    @IsString()
    @MaxLength(29)
    deal_value:String;

    @Column({nullable:true})
    @IsString()
    @MaxLength(10)
    deal_discount_in:String;

    @Column({nullable:true})
    @IsString()
    @MaxLength(10)
    deal_discount_input:String;

    @Column({nullable:true})
    @IsNumber()
    deal_milestone:Number;

    @Column({nullable:true})
    deal_close_date:Date;

    @Column({nullable:true})
    @IsString()
    description:String;

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

    @ManyToOne(() => contact_master, contact_master =>contact_master.deal_master)
    @JoinColumn({name:"contact_id"})
    contact_master:contact_master[]

    @ManyToOne(() => deal_milestone_master, deal_milestone_master =>deal_milestone_master.deal_master)
    @JoinColumn({name:"deal_milestone"})
    deal_milestone_master:deal_milestone_master[]

    @OneToMany(() => deal_attachment, deal_attachment => deal_attachment.deal_master)
    deal_attachment:deal_attachment[]

    @OneToMany(() => deal_master_product_mapping, deal_master_product_mapping => deal_master_product_mapping.deal_master)
    deal_master_product_mapping:deal_master_product_mapping[]

    @OneToMany(() => notes_management_deal, notes_management_deal =>notes_management_deal.deal_master)
    notes_management_deal:deal_master[]
    
    @OneToMany(() => deal_master_Milestone_mapping, deal_master_Milestone_mapping =>deal_master_Milestone_mapping.deal_master)
    deal_master_Milestone_mapping:deal_master_Milestone_mapping[]

    @OneToMany(() => task_management, task_management => task_management.deal_master)
    task_management:task_management[]

    @OneToMany(() => contact_document_master, contact_document_master => contact_document_master.deal_master)
    contact_document_master :contact_document_master[]
}
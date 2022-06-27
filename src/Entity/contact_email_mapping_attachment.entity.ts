import { IsDate, IsNotEmpty, IsNumber, IsString } from "class-validator";
import { Column, Entity, JoinColumn, ManyToOne, PrimaryGeneratedColumn } from "typeorm";
import { contact_email_mapping } from "./contact_email_mapping.entity";

@Entity()
export class contact_email_mapping_attachment{
    @PrimaryGeneratedColumn()
    @IsNotEmpty()
    cema_code: Number;

    @Column({nullable:true})
    @IsNumber()
    cei_code : Number;

    @Column({nullable:true, length:200})
    @IsString()
    attachment_path : String;

    @Column()
    @IsNumber()
    @IsNotEmpty()
    created_by:Number;

    @Column()
    @IsDate()
    @IsNotEmpty()
    created_timestamp:Date;

    @Column()
    @IsNumber()
    @IsNotEmpty()
    updated_by:Number;

    @Column()
    @IsDate()
    @IsNotEmpty()
    updated_timestamp:Date;

    @ManyToOne(() => contact_email_mapping, contact_email_mapping =>contact_email_mapping.contact_email_mapping_attachment)
    @JoinColumn({name:"cei_code"})
    contact_email_mapping:contact_email_mapping[]
}
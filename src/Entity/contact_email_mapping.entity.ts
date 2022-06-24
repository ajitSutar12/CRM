import { IsDate, IsNotEmpty, IsNumber, IsString } from "class-validator";
import { Column, Entity, OneToMany, PrimaryGeneratedColumn } from "typeorm";
import { contact_email_mapping_attachment } from "./contact_email_mapping_attachment.entity";

@Entity()
export class contact_email_mapping{
    @PrimaryGeneratedColumn()
    @IsNotEmpty()
    cei_code: Number;

    @Column({nullable:true})
    @IsNotEmpty()
    @IsNumber()
    c_code : Number;

    @Column({nullable:true})
    @IsString()
    to_email : String;

    @Column({nullable:true})
    @IsString()
    cc_email : String;

    @Column({nullable:true})
    @IsString()
    bcc_email : String;

    @Column({nullable:true})
    @IsString()
    subject : String;

    @Column({nullable:true})
    @IsString()
    email_content : String;

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

    @OneToMany(()=> contact_email_mapping_attachment, contact_email_mapping_attachment =>contact_email_mapping_attachment.contact_email_mapping)
    contact_email_mapping_attachment:contact_email_mapping_attachment[]
}
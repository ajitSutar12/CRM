import { IsDate, IsNotEmpty, IsNumber, IsString } from "class-validator";
import { Column, Entity, JoinColumn, ManyToOne, PrimaryGeneratedColumn } from "typeorm";
import { contact_master } from "./contact_master.entity";

@Entity()
export class notes_manage{
    @PrimaryGeneratedColumn()
    @IsNotEmpty()
    notes_code: Number;

    @Column({nullable:true, length:200})
    @IsString()
    notes_subject : String;

    @Column({nullable:true, length:500})
    @IsString()
    notes_content : String;

    @Column({nullable:true})
    @IsNumber()
    contact_id:Number;

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

    @ManyToOne(() => contact_master, contact_master =>contact_master.notes_manage)
    @JoinColumn({name:"contact_id"})
    contact_master:contact_master[]
}
import { IsNotEmpty, IsNumber, IsString, MaxLength } from "class-validator";
import { Column, Entity, JoinColumn, ManyToOne, PrimaryGeneratedColumn } from "typeorm";
import { contact_master } from "./contact_master.entity";

@Entity()
export class contact_visit_master{
    @PrimaryGeneratedColumn()
    cv_code: Number;

    @Column({nullable:true})
    @IsNumber()
    c_code : Number;

    @Column({nullable:true})
    v_datetime : Date;

    @Column({nullable:true})
    @IsString()
    @MaxLength(250)
    v_purpose: String;

    @Column({nullable:true})
    @IsString()
    v_description: String;

    @Column({nullable:true})
    @IsString()
    @MaxLength(20)
    v_type: String;

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

    @ManyToOne(() => contact_master, contact_master =>contact_master.contact_visit_master)
    @JoinColumn({name:"c_code"})
    contact_master:contact_master[]
}
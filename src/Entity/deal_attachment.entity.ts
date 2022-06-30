import { IsNotEmpty, IsNumber, IsString, MaxLength } from "class-validator";
import { Column, Entity, JoinColumn, ManyToOne, PrimaryGeneratedColumn } from "typeorm";
import { deal_master } from "./deal_master.entity";

@Entity()
export class deal_attachment{
    @PrimaryGeneratedColumn()
    da_code:Number;

    @Column({nullable:true})
    @IsNumber()
    deal_code:Number;

    @Column({nullable:true})
    @IsString()
    @MaxLength(150)
    attachment_name:String;

    @Column({nullable:true})
    @IsString()
    @MaxLength(200)
    attachment_path:String;

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

    @ManyToOne(() => deal_master, deal_master =>deal_master.deal_attachment)
    @JoinColumn({name:"deal_code"})
    deal_master:deal_master[]

}
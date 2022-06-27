import { IsNotEmpty, IsString } from "class-validator";
import { Column, Entity, OneToMany, PrimaryGeneratedColumn } from "typeorm";
import { deal_master } from "./deal_master.entity";

@Entity()
export class deal_milestone_master{
    @PrimaryGeneratedColumn()
    @IsNotEmpty()
    dm_code:Number;

    @Column()
    @IsString()
    deal_milestone:String;

    @OneToMany(() => deal_master, deal_master =>deal_master.deal_milestone_master)
    deal_master:deal_master[]

}
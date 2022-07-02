import { Column, Entity, OneToMany, PrimaryGeneratedColumn } from "typeorm";
import { IsString ,MaxLength } from "class-validator";
import { expense_master } from "./expense_master.entity";

@Entity()
export class expense_type_master{
    @PrimaryGeneratedColumn()
    etm_code:Number;

    @Column()
    @IsString()
    @MaxLength(50)
    e_type:String;

    @OneToMany(() => expense_master, expense_master => expense_master.expense_type_master)
    expense_master:expense_master[]
}
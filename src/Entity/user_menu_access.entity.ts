import { IsDate, IsNotEmpty, IsNumber } from "class-validator";
import { Column, Entity, JoinColumn, ManyToOne, PrimaryGeneratedColumn } from "typeorm";
import { menu_master } from "./menu_master.entity";
import { user_master } from "./user_master.entity";

@Entity()
export class user_menu_access{
 
    @PrimaryGeneratedColumn()
    uma_code:Number;
 
    @Column({nullable:true})
    @IsNumber()
    user_code:Number;

    @Column({nullable:true})
    @IsNumber()
    menu_code:Number;

    @Column({nullable:true})
    @IsNumber()
    create_status:Number;

    @Column({nullable:true})
    @IsNumber()
    read_status:Number;

    @Column({nullable:true})
    @IsNumber()
    update_status:Number;

    @Column({nullable:true})
    @IsNumber()
    delete_status:Number;

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

    @ManyToOne(() => user_master, user_master =>user_master.user_menu_access)
    @JoinColumn({name:"user_code"})
    user_master:user_master[]

    @ManyToOne(() => menu_master, menu_master =>menu_master.user_menu_access)
    @JoinColumn({name:"menu_code"})
    menu_master:menu_master[]
}
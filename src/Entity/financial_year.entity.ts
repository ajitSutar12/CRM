import { IsDate, IsNotEmpty, IsNumber, IsString ,MaxLength} from "class-validator";
import { Column, Entity, JoinColumn, ManyToOne, PrimaryGeneratedColumn } from "typeorm";
import { user_master } from "./user_master.entity";

@Entity()
export class financial_year{

    @PrimaryGeneratedColumn()
    fy_code:Number;
 
    @Column()
    @IsString()
    @MaxLength(20)
    @IsNotEmpty()
    fy:String;

    @Column()
    @IsString()
    @MaxLength(15)
    @IsNotEmpty()
    fy_start_month:String;   

    @Column()
    @IsString()
    @MaxLength(15)
    @IsNotEmpty()
    fy_end_month:String;  

    @Column()
    @IsNumber()
    @IsNotEmpty()
    fy_status:Number;   

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

    @ManyToOne(() => user_master, user_master =>user_master.financial_year_created)
    @JoinColumn({name:"created_by"})
    user_master_created:user_master[]

    @ManyToOne(() => user_master, user_master =>user_master.financial_year_updated)
    @JoinColumn({name:"updated_by"})
    user_master_updated:user_master[]
}
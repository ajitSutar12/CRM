import { IsDate, IsNotEmpty, IsNumber, IsString ,MaxLength} from "class-validator";
import { Column, Entity, JoinColumn, ManyToOne, OneToMany, PrimaryGeneratedColumn } from "typeorm";
import { user_master } from "./user_master.entity";

@Entity()
export class user_role_master{
  
    @PrimaryGeneratedColumn()
    role_code:Number;
 
    @Column()
    @IsString()
    @MaxLength(30)
    @IsNotEmpty()
    role_name:String;

    @Column()
    @IsNumber()
    @IsNotEmpty()
    role_status:Number;

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

    @OneToMany(()=> user_master, user_master =>user_master.user_role_master)
    user_master:user_master[]
}

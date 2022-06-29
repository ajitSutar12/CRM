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
    @MaxLength(11)
    @IsNotEmpty()
    created_by:Number;
 
    @Column()
    @IsDate()
    @IsNotEmpty()
    create_timestamp:Date;
 
    @Column()
    @IsNumber()
    @IsNotEmpty()
    updated_by:Number;
  
    @Column()
    @IsDate()
    @IsNotEmpty()
    updated_timestamp:Date;

    @OneToMany(()=> user_master, user_master =>user_master.user_role_master)
    user_master:user_master[]

    @ManyToOne(() => user_master, user_master =>user_master.user_role_master_created)
    @JoinColumn({name:"created_by"})
    user_master_created:user_master[]

    @ManyToOne(() => user_master, user_master =>user_master.user_role_master_updated)
    @JoinColumn({name:"updated_by"})
    user_master_updated:user_master[]
}

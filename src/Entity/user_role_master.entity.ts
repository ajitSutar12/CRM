import { ApiProperty } from "@nestjs/swagger";
import { IsDate, IsNotEmpty, IsNumber, IsString } from "class-validator";
import { Column, Entity, JoinColumn, ManyToOne, OneToMany, PrimaryGeneratedColumn } from "typeorm";
import { user_master } from "./user_master.entity";

@Entity()
export class user_role_master{
    @ApiProperty({
        type:Number,
        description:"User Role ID"
    })
    @PrimaryGeneratedColumn()
    @IsNotEmpty()
    role_code:Number;
   
    @ApiProperty({
        type:String,
        description:"Role Name"
    })
    @Column()
    @IsString()
    @IsNotEmpty()
    role_name:String;

    @ApiProperty({
        type:Number,
        description:"Role Status"
    })
    @Column()
    @IsNumber()
    @IsNotEmpty()
    role_status:Number;

    @ApiProperty({
        type:Number,
        description:"Created By User Id"
    })
    @Column()
    @IsNumber()
    @IsNotEmpty()
    created_by:Number;
    
    @ApiProperty({
        type:Date,
        description:"Created timestamp"
    })
    @Column()
    @IsDate()
    @IsNotEmpty()
    create_timestamp:Date;
    
    @ApiProperty({
        type:Number,
        description:"Updated By User Id"
    })
    @Column()
    @IsNumber()
    @IsNotEmpty()
    updated_by:Number;
    
    @ApiProperty({
        type:Date,
        description:"Updated Timestamp"
    })
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

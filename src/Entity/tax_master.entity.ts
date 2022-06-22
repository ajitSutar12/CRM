import { ApiProperty } from "@nestjs/swagger";
import { IsDate, IsNotEmpty, IsNumber, IsString } from "class-validator";
import { Column, Entity, JoinColumn, ManyToOne, PrimaryGeneratedColumn } from "typeorm";
import { user_master } from "./user_master.entity";

@Entity()
export class tax_master{

    @ApiProperty({
        type:Number,
        description:"Tax ID"
    })
    @PrimaryGeneratedColumn()
    @IsNotEmpty()
    t_code:Number;
   
    @ApiProperty({
        type:String,
        description:"Tax Name"
    })
    @Column()
    @IsString()
    @IsNotEmpty()
    t_name:String;

    @ApiProperty({
        type:String,
        description:"Tax Percentage Calculator"
    })
    @Column()
    @IsString()
    @IsNotEmpty()
    t_percentage:String;   
    
    @ApiProperty({
        type:Number,
        description:"Status"
    })
    @Column()
    @IsNumber()
    @IsNotEmpty()
    t_status:Number;  
        
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

    @ManyToOne(() => user_master, user_master_created =>user_master_created.tax_master_created)
    @JoinColumn({name:"created_by"})
    user_master_created:user_master[]

    @ManyToOne(() => user_master, user_master_updated =>user_master_updated.tax_master_updated)
    @JoinColumn({name:"updated_by"})
    user_master_updated:user_master[]
}
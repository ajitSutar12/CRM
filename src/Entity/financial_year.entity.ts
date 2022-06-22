import { ApiProperty } from "@nestjs/swagger";
import { IsDate, IsNotEmpty, IsNumber, IsString } from "class-validator";
import { Column, Entity, JoinColumn, ManyToOne, PrimaryGeneratedColumn } from "typeorm";
import { user_master } from "./user_master.entity";

@Entity()
export class financial_year{

    @ApiProperty({
        type:Number,
        description:"Financial Year ID"
    })
    @PrimaryGeneratedColumn()
    @IsNotEmpty()
    fy_code:Number;
   
    @ApiProperty({
        type:String,
        description:"Financial Year"
    })
    @Column()
    @IsString()
    @IsNotEmpty()
    fy:String;

    @ApiProperty({
        type:String,
        description:"Financial Start Month"
    })
    @Column()
    @IsString()
    @IsNotEmpty()
    fy_start_month:String;   
    
    @ApiProperty({
        type:String,
        description:"Financial End Month"
    })
    @Column()
    @IsString()
    @IsNotEmpty()
    fy_end_month:String;  
        
    @ApiProperty({
        type:Number,
        description:"Financial Year Status"
    })
    @Column()
    @IsNumber()
    @IsNotEmpty()
    fy_status:Number;   
        
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

    @ManyToOne(() => user_master, user_master =>user_master.financial_year_created)
    @JoinColumn({name:"created_by"})
    user_master_created:user_master[]

    @ManyToOne(() => user_master, user_master =>user_master.financial_year_updated)
    @JoinColumn({name:"updated_by"})
    user_master_updated:user_master[]
}
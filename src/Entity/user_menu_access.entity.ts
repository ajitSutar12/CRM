import { ApiProperty } from "@nestjs/swagger";
import { IsDate, IsNotEmpty, IsNumber } from "class-validator";
import { Column, Entity, JoinColumn, ManyToOne, PrimaryGeneratedColumn } from "typeorm";
import { menu_master } from "./menu_master.entity";
import { user_master } from "./user_master.entity";

@Entity()
export class user_menu_access{
    @ApiProperty({
        type:Number,
        description:"User Menu Access ID"
    })
    @PrimaryGeneratedColumn()
    @IsNotEmpty()
    uma_code:Number;
   
    @ApiProperty({
        type:Number,
        description:"User ID"
    })
    @Column({nullable:true})
    @IsNumber()
    user_code:Number;

    @ApiProperty({
        type:Number,
        description:"Create permission"
    })
    @Column({nullable:true})
    @IsNumber()
    create_status:Number;

    @ApiProperty({
        type:Number,
        description:"Read permission"
    })
    @Column({nullable:true})
    @IsNumber()
    read_status:Number;

    @ApiProperty({
        type:Number,
        description:"Update permission"
    })
    @Column({nullable:true})
    @IsNumber()
    update_status:Number;

    @ApiProperty({
        type:Number,
        description:"Delete permission"
    })
    @Column({nullable:true})
    @IsNumber()
    delete_status:Number;

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

    @ManyToOne(() => user_master, user_master =>user_master.user_menu_access)
    @JoinColumn({name:"user_code"})
    user_master:user_master[]

    @ManyToOne(() => menu_master, menu_master =>menu_master.user_menu_access)
    @JoinColumn({name:"menu_code"})
    menu_master:user_master[]
}
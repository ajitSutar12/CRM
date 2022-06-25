import { IsDate, IsNotEmpty, IsNumber, IsString } from 'class-validator';
import { Entity, Column, PrimaryGeneratedColumn, ManyToOne, JoinColumn } from 'typeorm';
import { call_status_master } from './call_status_master.entity';

@Entity()
export class call_log_management{
  
    @PrimaryGeneratedColumn()
    clm_code : Number;

    @Column({nullable:true,length:100})
    @IsString()
    call_subject: String;

    @Column({nullable:true,length:20})
    @IsString()
    phone_number: String;

    @Column({nullable:true,length:20})
    @IsString()
    call_type: String;

    @Column({nullable:true})
    @IsNumber()
    call_status_id: Number;

    @Column({nullable:true,length:20})
    @IsString()
    call_hour: String;

    @Column({nullable:true,length:20})
    @IsString()
    call_minute: String;

    @Column({nullable:true,length:20})
    @IsString()
    call_second: string;

    @Column({nullable:true})
    @IsString()
    description: string;

    @Column({nullable:true})
    @IsDate()
    followup_date: Date;

    @Column()
    @IsNumber()
    @IsNotEmpty()
    created_by: Number;

    @Column()
    @IsDate()
    @IsNotEmpty()
    created_timestamp: Date;

    @Column()
    @IsNumber()
    @IsNotEmpty()
    updated_by: Number;

    @Column()
    @IsDate()
    @IsNotEmpty()
    updated_timestamp: Date;

    @Column({nullable:true})
    @IsNumber()
    followup_status: Number;

    @Column({nullable:true})
    @IsDate()
    followup_actual_date: Date;
        
    @Column({nullable:true})
    @IsNumber()
    Followup_by: Number;

    @ManyToOne(() => call_status_master, call_status_master =>call_status_master.call_log_management)
    @JoinColumn({name:"call_status_id"})
    call_status_master:call_status_master[]
}
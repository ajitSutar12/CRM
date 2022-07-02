import { IsDate, IsNotEmpty, IsNumber, IsString, MaxLength } from 'class-validator';
import { Entity, Column, PrimaryGeneratedColumn, ManyToOne, JoinColumn } from 'typeorm';
import { call_status_master } from './call_status_master.entity';

@Entity()
export class call_log_management{
  
    @PrimaryGeneratedColumn()
    clm_code : Number;

    @Column({nullable:true})
    @IsString()
    @MaxLength(100)
    call_subject: String;

    @Column({nullable:true})
    @IsString()
    @MaxLength(20)
    phone_number: String;

    @Column({nullable:true})
    @IsString()
    @MaxLength(20)
    call_type: String;

    @Column({nullable:true})
    @IsNumber()
    call_status_id: Number;

    @Column({nullable:true})
    @IsString()
    @MaxLength(20)
    call_hour: String;

    @Column({nullable:true})
    @IsString()
    @MaxLength(20)
    call_minute: String;

    @Column({nullable:true})
    @IsString()
    @MaxLength(20)
    call_second: string;

    @Column({nullable:true})
    @IsString()
    description: string;

    @Column({nullable:true})
    followup_date: Date;

    @Column()
    @IsNumber()
    @IsNotEmpty()
    created_by: Number;

    @Column()
    @IsNotEmpty()
    created_timestamp: Date;

    @Column()
    @IsNumber()
    @IsNotEmpty()
    updated_by: Number;

    @Column()
    @IsNotEmpty()
    updated_timestamp: Date;

    @Column({nullable:true})
    @IsNumber()
    followup_status: Number;

    @Column({nullable:true})
    followup_actual_date: Date;
        
    @Column({nullable:true})
    @IsNumber()
    Followup_by: Number;

    @ManyToOne(() => call_status_master, call_status_master =>call_status_master.call_log_management)
    @JoinColumn({name:"call_status_id"})
    call_status_master:call_status_master[]
}
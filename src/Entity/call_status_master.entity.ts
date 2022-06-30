import { IsString , MaxLength} from 'class-validator';
import { Entity, Column, PrimaryGeneratedColumn, OneToMany } from 'typeorm';
import { call_log_management } from './call_log_management.entity';

@Entity()
export class call_status_master{
  
    @PrimaryGeneratedColumn()
    csm_code : Number;

    @Column({nullable:true})
    @IsString()
    @MaxLength(50)
    call_status: String;

    @OneToMany(()=> call_log_management, call_log_management =>call_log_management.call_status_master)
    call_log_management:call_log_management[]
}
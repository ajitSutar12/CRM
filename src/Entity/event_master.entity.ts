import { IsDate, IsNotEmpty, IsNumber, IsString, MaxLength } from 'class-validator';
import { Entity, Column, PrimaryGeneratedColumn, ManyToOne, JoinColumn} from 'typeorm';
import { event_related_master } from './event_related_master.entity';
import { event_status_master } from './event_status_master.entity';
import { event_type_master } from './event_type_master.entity';

@Entity()
export class event_master {

    @PrimaryGeneratedColumn()
    event_code : Number;

    @Column({nullable:true})
    @IsNumber()
    etm_code: Number;

    @Column({nullable:true})
    @IsString()
    @MaxLength(20)
    event_priority: String;

    @Column({nullable:true})
    @IsNumber()
    event_status_id: Number;

    @Column({nullable:true})
    @IsDate()
    start_date: Date;

    @Column({nullable:true})
    @IsString()
    @MaxLength(10)
    start_time: String;

    @Column({nullable:true})
    @IsDate()
    end_date: Date;

    @Column({nullable:true})
    @IsString()
    @MaxLength(10)
    end_time: String;

    @Column({nullable:true})
    @IsNumber()
    email_invitation: Number;

    @Column({nullable:true})
    @IsNumber()
    event_rel_id: Number;

    @Column({nullable:true})
    @IsNumber()
    event_rel_sub_id: Number;

    @Column({nullable:true})
    @IsString()
    event_description: String;

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

    @ManyToOne(() => event_type_master, event_type_master =>event_type_master.event_master)
    @JoinColumn({name:"etm_code"})
    event_type_master:event_type_master[]

    @ManyToOne(() => event_status_master, event_status_master =>event_status_master.event_master)
    @JoinColumn({name:"event_status_id"})
    event_status_master:event_status_master[]

    @ManyToOne(() => event_related_master, event_related_master =>event_related_master.event_master)
    @JoinColumn({name:"event_rel_id"})
    event_related_master:event_related_master[]

}
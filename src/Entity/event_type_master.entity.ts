import { IsString } from 'class-validator';
import { Entity, Column, PrimaryGeneratedColumn, OneToMany } from 'typeorm';
import { event_master } from './event_master.entity';


@Entity()
export class event_type_master{
  
    @PrimaryGeneratedColumn()
    etm_code : Number;

    @Column({nullable:true})
    @IsString()
    event_type: String;

    @OneToMany(()=> event_master, event_master =>event_master.event_status_master)
    event_master:event_master[]
}
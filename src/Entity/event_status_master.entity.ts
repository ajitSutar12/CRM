import { IsString } from 'class-validator';
import { Entity, Column, PrimaryGeneratedColumn, OneToMany } from 'typeorm';
import { event_master } from './event_master.entity';

@Entity()
export class event_status_master{
  
    @PrimaryGeneratedColumn()
    esm_code : Number;

    @Column({nullable:true})
    @IsString()
    event_status: String;

    @OneToMany(()=> event_master, event_master =>event_master.event_status_master)
    event_master:event_master[]
}
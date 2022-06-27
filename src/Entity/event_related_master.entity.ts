import { IsString } from 'class-validator';
import { Entity, Column, PrimaryGeneratedColumn, OneToMany } from 'typeorm';
import { event_master } from './event_master.entity';

@Entity()
export class event_related_master{
  
    @PrimaryGeneratedColumn()
    erm_code : Number;

    @Column({nullable:true, length:40})
    @IsString()
    event_relation: String;

    @OneToMany(()=> event_master, event_master =>event_master.event_related_master)
    event_master:event_master[]
}
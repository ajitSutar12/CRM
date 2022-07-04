import { IsString ,MaxLength} from 'class-validator';
import { Entity, Column, PrimaryGeneratedColumn, OneToMany } from 'typeorm';
import { event_master } from './event_master.entity';


@Entity()
export class event_type_master{
  
    @PrimaryGeneratedColumn()
    etm_code : Number;

    @Column({nullable:true})
    @IsString()
    @MaxLength(40)
    event_type: String;

    @Column({default:0})
    status: number

    @OneToMany(()=> event_master, event_master =>event_master.event_status_master)
    event_master:event_master[]
}
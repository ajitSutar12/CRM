import { IsString , MaxLength} from 'class-validator';
import { Entity, Column, PrimaryGeneratedColumn, OneToMany } from 'typeorm';
import { activity_moniter } from './activity_moniter.entity';

@Entity()
export class transaction_master{
  
    @PrimaryGeneratedColumn()
    t_code : Number;

    @Column({nullable:true})
    @IsString()
    @MaxLength(40)
    t_name: String;

    @OneToMany(()=> activity_moniter, activity_moniter =>activity_moniter.transaction_master)
    activity_moniter:activity_moniter[]
}
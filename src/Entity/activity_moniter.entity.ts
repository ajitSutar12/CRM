import { IsNotEmpty, IsNumber, IsString, MaxLength } from 'class-validator';
import { Entity, Column, PrimaryGeneratedColumn, ManyToOne, JoinColumn } from 'typeorm';
import { transaction_master } from './transaction_master.entity';

@Entity()
export class activity_moniter{
  
    @PrimaryGeneratedColumn()
    am_code : Number;

    @Column({nullable:true})
    @IsString()
    activity: String;

    @Column({nullable:true})
    @IsNumber()
    t_id: Number;

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

    @Column({default:0})
    status: number

    @ManyToOne(() => transaction_master, transaction_master =>transaction_master.activity_moniter)
    @JoinColumn({name:"t_id"})
    transaction_master:transaction_master[]
}
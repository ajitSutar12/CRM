import { IsDate, IsNotEmpty, IsNumber, IsString ,MaxLength} from 'class-validator';
import { Entity, Column, PrimaryGeneratedColumn, ManyToOne, JoinColumn, OneToMany } from 'typeorm';
import { deal_master_product_mapping } from './deal_master_product_mapping';
import { product_category } from './product_category.entity';
import { product_rate_master } from './product_rate_master.entity';
import { product_type } from './product_type.entity';
import { target_master } from './target_master.entity';
import { unit_master } from './unit_master.entity';

@Entity()
export class product_master {

    @PrimaryGeneratedColumn()
    p_code : Number;

    @Column()
    @IsString()
    @MaxLength(40)
    @IsNotEmpty()
    p: String;

    @Column()
    @IsNumber()
    @IsNotEmpty()
    pc_code: Number;

    @Column()
    @IsNumber()
    @IsNotEmpty()
    pt_code: Number;

    @Column()
    @IsNumber()
    @IsNotEmpty()
    p_unit: Number;

    @Column()
    @IsString()
    @MaxLength(60)
    @IsNotEmpty()
    p_image: String;

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

    @ManyToOne(() => product_category, product_category =>product_category.product_master)
    @JoinColumn({name:"pc_code"})
    product_category:product_category[]

    @ManyToOne(() => product_type, product_type =>product_type.product_master)
    @JoinColumn({name:"pt_code"})
    product_type:product_type[]

    @ManyToOne(() => unit_master, unit_master =>unit_master.product_master)
    @JoinColumn({name:"p_unit"})
    unit_master:unit_master[]

    @OneToMany(()=> product_rate_master, product_rate_master =>product_rate_master.product_master)
    product_rate_master:product_rate_master[]

    @OneToMany(() => deal_master_product_mapping, deal_master_product_mapping => deal_master_product_mapping.product_master)
    deal_master_product_mapping:deal_master_product_mapping[]

    @OneToMany(() => target_master, target_master => target_master.product_master)
    target_master:target_master[]

}
import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { DataSource } from 'typeorm';

import { AppController } from './app.controller';
import { AppService } from './app.service';
import { company_master } from './Entity/company_master.entity';
import { contact_master } from './Entity/contact_master.entity';
import { country_state_city } from './Entity/country_state_city.entity';
import { financial_year } from './Entity/financial_year.entity';
import { menu_master } from './Entity/menu_master.entity';
import { product_category } from './Entity/product_category.entity';
import { product_master } from './Entity/product_master.entity';
import { product_rate_master } from './Entity/product_rate_master.entity';
import { product_type } from './Entity/product_type.entity';
import { tax_master } from './Entity/tax_master.entity';
import { unit_master } from './Entity/unit_master.entity';
import { user_master } from './Entity/user_master.entity';
import { user_menu_access } from './Entity/user_menu_access.entity';
import { user_role_master } from './Entity/user_role_master.entity';
import { config } from './orm.config';
import { CompanyMasterModule } from './company_master/company_master.module';
import { MenuMasterModule } from './menu_master/menu_master.module';
import { ContactMasterModule } from './contact_master/contact_master.module';
import { FinancialYearModule } from './financial_year/financial_year.module';
import { ProductCategoryModule } from './product_category/product_category.module';
import { ProductTypeModule } from './product_type/product_type.module';
import { ProductRateMasterModule } from './product_rate_master/product_rate_master.module';
import { UserMasterModule } from './user_master/user_master.module';
import { UserMenuAccessModule } from './user_menu_access/user_menu_access.module';
import { UserRoleMasterModule } from './user_role_master/user_role_master.module';
import { TaxMasterModule } from './tax_master/tax_master.module';
import { UnitMasterModule } from './unit_master/unit_master.module';
import { ProductMasterModule } from './product_master/product_master.module';
import { ContactEmailModule } from './contact_email/contact_email.module';
import { notes_manage } from './Entity/notes_manage.entity';
import { NotesManageModule } from './notes_manage/notes_manage.module';
import { CallModule } from './call/call.module';
import { EventModule } from './event/event.module';
import { TaskModule } from './task/task.module';
import { deal_master } from './Entity/deal_master.entity';
import { deal_attachment } from './Entity/deal_attachment.entity';
import { deal_master_product_mapping } from './Entity/deal_master_product_mapping';
import { deal_milestone_master } from './Entity/deal_milestone_master';
import { DealModule } from './deal/deal.module';
import { deal_master_Milestone_mapping } from './Entity/deal_master_milestoneMapping';
import { notes_management_deal } from './Entity/notes_management_deal';

@Module({
  imports: [ TypeOrmModule.forRoot(config),
              TypeOrmModule.forFeature([company_master, menu_master, contact_master, product_category,
                 product_master, product_type, unit_master, product_rate_master, country_state_city,
                 financial_year, user_master, user_menu_access, user_role_master, tax_master, notes_manage,
                 deal_master,deal_attachment,deal_master_product_mapping,deal_milestone_master,deal_master_Milestone_mapping,
                 notes_management_deal]),
              CompanyMasterModule,
              MenuMasterModule,
              ContactMasterModule,
              FinancialYearModule,
              ProductCategoryModule,
              ProductTypeModule,
              ProductRateMasterModule,
              UserMasterModule,
              UserMenuAccessModule,
              UserRoleMasterModule,
              TaxMasterModule,
              UnitMasterModule,
              ProductMasterModule,
              ContactEmailModule,
              NotesManageModule,
              CallModule,
              EventModule,
              TaskModule,
              DealModule],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {
  constructor(private dataSource: DataSource){}
}

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
<<<<<<< Updated upstream
import { CompanyMasterModule } from './company_master/company_master.module';
import { MenuMasterModule } from './menu_master/menu_master.module';
import { ContactMasterModule } from './contact_master/contact_master.module';
import { FinancialYearModule } from './financial_year/financial_year.module';
import { ProductCategoryModule } from './product_category/product_category.module';
import { ProductTypeModule } from './product_type/product_type.module';
import { ProductRateMasterModule } from './product_rate_master/product_rate_master.module';
=======
import { UserMasterModule } from './user_master/user_master.module';
import { UserMenuAccessModule } from './user_menu_access/user_menu_access.module';
import { UserRoleMasterModule } from './user_role_master/user_role_master.module';
import { TaxMasterModule } from './tax_master/tax_master.module';
import { UnitMasterModule } from './unit_master/unit_master.module';
import { ProductMasterModule } from './product_master/product_master.module';
>>>>>>> Stashed changes

@Module({
  imports: [ TypeOrmModule.forRoot(config),
              TypeOrmModule.forFeature([company_master, menu_master, contact_master, product_category,
                 product_master, product_type, unit_master, product_rate_master, country_state_city,
                 financial_year, user_master, user_menu_access, user_role_master, tax_master]),
<<<<<<< Updated upstream
              CompanyMasterModule,
              MenuMasterModule,
              ContactMasterModule,
              FinancialYearModule,
              ProductCategoryModule,
              ProductTypeModule,
              ProductRateMasterModule],
=======
              UserMasterModule,
              UserMenuAccessModule,
              UserRoleMasterModule,
              TaxMasterModule,
              UnitMasterModule,
              ProductMasterModule],
>>>>>>> Stashed changes
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {
  constructor(private dataSource: DataSource){}
}

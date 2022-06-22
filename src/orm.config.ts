import {TypeOrmModuleOptions } from "@nestjs/typeorm";

export const config :TypeOrmModuleOptions = {
    type: 'mysql',
    host: 'localhost',
    port: 3306,
    username: 'root',
    password: '',
    database: 'crm',
    synchronize: true,
    autoLoadEntities:true
    //logging : true,
  };
import { ConfigModule } from '@nestjs/config';
import { TypeOrmModule } from '@nestjs/typeorm';
import { Module } from '@nestjs/common';

import entities from './typeorm'
import { PersonalModule } from './personal/personal.module';

@Module({
  imports: [
    ConfigModule.forRoot({
      envFilePath: '.env'
    }),
    TypeOrmModule.forRoot({
      type: 'mysql',
      host: process.env.NEST_DB_HOST,
      port: parseInt(process.env.NEST_DB_PORT),
      username: process.env.NEST_DB_USERNAME,
      password: process.env.NEST_DB_PASSWORD,
      database: process.env.NEST_DB_NAME,
      entities,
      synchronize: true
    }),
    PersonalModule
  ],
  controllers: [],
  providers: [],
})
export class AppModule { }

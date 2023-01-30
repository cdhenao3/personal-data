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
      host: 'localhost',
      port: 3306,
      username: 'root',
      password: '1Qazwsxedc!',
      database: 'data',
      entities,
      synchronize: true
    }),
    PersonalModule
  ],
  controllers: [],
  providers: [],
})
export class AppModule { }

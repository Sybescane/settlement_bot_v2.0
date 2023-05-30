import { Module } from '@nestjs/common';
import { AppUpdate } from './app.update';
import { AppService } from './app.service';
import { TypeOrmModule } from '@nestjs/typeorm';
import { ConfigModule, ConfigService } from '@nestjs/config';
import config from 'configurations/env.config'
import { TelegrafModule } from 'nestjs-telegraf';
import { getTelegrafConfig } from 'configurations/telegraf.config';
@Module({
  imports: [TypeOrmModule.forRootAsync({
    // imports: [ConfigModule],
    inject: [ConfigService],
    useFactory: (config: ConfigService) => config.get('database')
  }),
  ConfigModule.forRoot({
    isGlobal: true,
    load: [config]
  }),
TelegrafModule.forRootAsync({
    inject: [ConfigService],
    useFactory: getTelegrafConfig
})],
  controllers: [],
  providers: [AppService, AppUpdate],
})
export class AppModule {}

import { Controller, Get } from '@nestjs/common';
import { AppService } from './app.service';
import { InjectRepository } from '@nestjs/typeorm';
import { InjectBot, Start, Update } from 'nestjs-telegraf';
import { Context, Telegraf } from 'telegraf';

@Update()
export class AppUpdate {
  constructor(private readonly appService: AppService,
  @InjectBot() private readonly bot: Telegraf<Context>) {}

  @Start()
  async start(ctx: Context){
    await ctx.reply('Hi, friend!')
  } 
}

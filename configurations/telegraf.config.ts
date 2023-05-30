import { ConfigService } from '@nestjs/config';
import { TelegrafModuleOptions } from 'nestjs-telegraf';

export const getTelegrafConfig = async (
   configService: ConfigService
): Promise<TelegrafModuleOptions> => ({
   token: '6113524181:AAFJjcE03q5ASn_y5ZXTGh3V9L27Fggcwzc'
})
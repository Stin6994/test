import { Telegraf } from "telegraf";
import { config } from "./config.js";
import { getWeather } from "./weather.js";
import { getCat } from "./cat.js";
import { getBalance } from "./balance.js";
import { showMenu, closeMenu } from "./menu.js";


const bot = new Telegraf (config.telegramToken, {});

bot.start((ctx) => ctx.reply('Доюро пожаловать в бот. Для начала напишите "меню"'));
bot.on ("message", async ctx => {
    const chatId = ctx.chat.id;

    if (ctx.message.text == "меню" || ctx.message.text == "Меню") {
        showMenu(bot, chatId);
        /* console.log(ctx.message); */
    } else if (ctx.message.location) {
       let weather = await getWeather(ctx);
       ctx.reply(weather);
    } else if (ctx.message.text == "Получить мем кота") {
        let cat = await getCat();
        ctx.reply(cat);
    } else if (ctx.message.text == "Баланс РН-Карт") {
            let balance = await getBalance();
            ctx.reply(balance);
    } else {
        closeMenu(bot, chatId);
    }
});
bot.launch();

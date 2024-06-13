export const showMenu = (bot, chatId) => {
    bot.telegram.sendMessage(chatId, "Выбирете действия", {
      reply_markup: {
        keyboard: [
          [
            {
              text: "Узнать погоду",
              request_location: true,
            },
          ],
          ["Получить мем кота"],
          ["Баланс РН-Карт"],
          ["Закрыть"],
        ],
      },
    });
  };
  
  export const closeMenu = (bot, chatId) => {
    bot.telegram.sendMessage(chatId, "Меню закрыто, вызовите заново", {
      reply_markup: {
        remove_keyboard: true,
      },
    });
  };
namespace GAMES {
  // Тип для изображения игры
  type GameImage = {
    image: string; // URL изображения
  };

  // Основной тип для игры
  type Game = {
    game_name: string; // Название игры
    description: string; // Описание игры
    image: string; // URL изображения игры
  };

  // Ответ на запрос для получения игр
  type GetGamesResponse = Game[]; // Массив объектов Game

  // Параметры запроса для получения игр
  type GetGamesRequest = void; // Отсутствие параметров запроса
}

namespace POSTS {
  // Тип для фотографии аттракциона
  type AttractionPhoto = {
    image: string;
  };

  // Тип для аттракциона
  type Attraction = {
    at_name: string; // Название аттракциона
    description: string; // Описание аттракциона
    attraction_photos: AttractionPhoto[]; // Массив фотографий аттракционов
    average_rating: number; // Средний рейтинг аттракциона
  };

  // Тип для ответа на запрос аттракционов
  type GetPostResponse = Attraction[]; // Массив объектов Attraction
  type GetPostsResponse = void; // Отсутствие данных

  // Запрос аттракционов
  type GetPostRequest = {}; // Параметры запроса (пока пустые)
  type GetPostsRequest = void; // Отсутствие параметров запроса
}

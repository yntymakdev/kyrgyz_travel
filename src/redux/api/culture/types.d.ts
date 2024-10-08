// types.ts

namespace CULTURE {
  // Тип для изображения
  type Image = {
    image: string; // URL изображения
  };

  // Основной тип для культуры
  type CultureItem = {
    id: number; // Идентификатор
    culture_name: string; // Название культуры
    description: string; // Описание культуры
    image: string; // URL изображения культуры
  };

  // Ответ на запрос для получения данных о культуре
  type GetCultureResponse = CultureItem[]; // Массив объектов CultureItem

  // Параметры запроса для получения данных о культуре
  type GetCultureRequest = void; // Отсутствие параметров запроса
}

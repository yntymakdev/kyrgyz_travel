// Тип для блюда
export interface FoodItem {
  id: number; // Уникальный идентификатор блюда
  region_food: number; // Идентификатор региона, к которому относится блюдо
  food_name: string; // Название блюда
  include_food: string; // Что входит в состав блюда
  description_name: string; // Описание блюда
  image: string; // URL изображения блюда
}

// Тип для запроса на получение блюда
export interface FoodRequest {
  region_id: number; // Идентификатор блюда, который вы хотите получить
}

// Тип для ответа сервера на запрос о блюде
export interface FoodResponse {
  food: FoodItem; // Объект с информацией о блюде
}

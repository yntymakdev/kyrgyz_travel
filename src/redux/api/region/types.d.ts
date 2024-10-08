namespace REGION {
  // Тип для фотографии региона
  type RegionPhoto = {
    image: string; // URL изображения
  };

  // Тип для запроса региона
  type RegionRequest = {
    region_name: string; // Название региона
    description: string; // Описание региона
    reg_photos: RegionPhoto[]; // Массив фотографий региона
  };

  // Тип для региона
  type Region = {
    region_name: string; // Название региона
    description: string; // Описание региона
    reg_photos: RegionPhoto[]; // Массив фотографий региона
  };

  // Тип для ответа на запрос региона
  type RegionsResponse = Region[]; // Массив объектов региона
}

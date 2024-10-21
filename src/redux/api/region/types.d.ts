// types.ts
export namespace REGION {
  export interface RegionPhoto {
    image: string; // URL изображения
  }

  export interface Region {
    id: string; // Добавляем id для уникальной идентификации региона
    region_name: string;
    description: string;
    reg_photos: RegionPhoto[]; // Массив фотографий региона
  }

  export type RegionsResponse = Region; // Один регион
  export type RegionsResponseAll = Region[]; // Массив регионов
}

"use client";
import { useGetPost_region_allQuery } from "@/redux/api/region";
import Link from "next/link";

const RegionList = () => {
  const { data: regions, isLoading: isRegionsLoading, error: regionsError } = useGetPost_region_allQuery();

  if (isRegionsLoading) return <div>Загрузка регионов...</div>;
  if (regionsError) {
    console.error("Ошибка при загрузке регионов:", regionsError);
    return <div>Ошибка при загрузке регионов: {regionsError.message}</div>;
  }

  if (!regions || regions.length === 0) return <div>Нет доступных регионов.</div>;

  return (
    <div>
      <ul>
        {regions.map((region) => (
          <div key={region.region_name}>
            <Link href={`/regions/${region.id}`}>{region.region_name}</Link>
          </div>
        ))}
      </ul>
    </div>
  );
};

export default RegionList;

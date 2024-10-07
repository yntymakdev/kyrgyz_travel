import { useRouter } from "next/router";
import { useGetPost_regionFoodQuery } from "@/path-to-query-hooks"; // Укажи правильный путь до твоего хука

const RegionPage = () => {
  const router = useRouter();
  const { region } = router.query; // Получаем название региона из URL

  // Делаем запрос для получения данных о еде конкретного региона
  const {
    data: foodData,
    isLoading,
    isError,
  } = useGetPost_regionFoodQuery(region as string);

  if (isLoading) return <p>Loading...</p>;
  if (isError) return <p>Error loading region food data.</p>;

  return (
    <div>
      <h1>Region: {region}</h1>
      {foodData ? (
        <div>
          <h2>Food of {region}</h2>
          <p>
            <strong>Food Name:</strong> {foodData.food_name}
          </p>
          <img
            src={foodData.image}
            alt={foodData.food_name}
            style={{ width: "300px", height: "200px" }}
          />
          <p>
            <strong>Description:</strong> {foodData.description_name}
          </p>
          <p>
            <strong>Ingredients:</strong> {foodData.include_food}
          </p>
        </div>
      ) : (
        <p>No food data available for this region.</p>
      )}
    </div>
  );
};

export default RegionPage;

  import { CapitalizeFirstLetterEveryWord } from "../components/Regex";

data = []

  const getCategoriesFromAPI = async () => {
    try {
      const fetchData = await fetch(
        'https://fakestoreapi.com/products/categories',
      );
      const rawData = await fetchData.json();
      console.log(await rawData)
      captialiseData(rawData)
    } catch (error) {
      console.error(error);
    }
  };

  const captialiseData = (rawData) => {
    rawData.forEach((i) => data.push(CapitalizeFirstLetterEveryWord(i)))
    }
export default async function returnCategories(){
    await getCategoriesFromAPI()
    console.log(await "returnCategory returning: ", data)
    return data
}
import { URLEncoder } from "../components/Regex";

data = {}

  const getProductListFromAPI = async (category) => {
    try {
      const baseURL = 'https://fakestoreapi.com/products/category/'
      const fetchData = await fetch(baseURL.concat(URLEncoder(category)));
      const rawData = await fetchData.json();
      console.log(await "getProductListFromAPI", rawData)
      return await rawData
    } catch (error) {
      console.error(error);
    }
  };

export default async function returnProductList(category){
    data = await getProductListFromAPI(category)
    console.log(await "returnCategory returning: ", data)
    return data
}
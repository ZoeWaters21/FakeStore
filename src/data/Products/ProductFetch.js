import { URLEncoder } from "../../Functions/StringManipulation";

let productData = {}

const baseURL = 'https://fakestoreapi.com/products/category/'

  const getProductListFromAPI = async (category) => {
    try {
      const fetchData = await fetch(baseURL.concat(URLEncoder(category)));
      const rawData = await fetchData.json();
      //console.log(await "getProductListFromAPI", rawData)
      return await rawData
    } catch (error) {
      console.error(error);
    }
  };


export default async function returnProductList(category){
  productData = await getProductListFromAPI(category)
  //console.log(await "returnCategory returning: ", productData)
  return productData
}
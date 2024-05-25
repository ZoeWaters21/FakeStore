import { CapitalizeFirstLetterEveryWord } from "../../Functions/StringManipulation";
  
let categoryData = []

  const getCategoriesFromAPI = async () => {
    try {
      const baseURL = 'https://fakestoreapi.com/products/categories'
      const fetchData = await fetch(
        baseURL
      );
      const rawData = await fetchData.json();
      //console.log(await "Rawdata from getCategoriesFromAPI returns: ", rawData)
      return await rawData
    } catch (error) {
      console.error(error);
    }
  };

  const captialiseData = (rawData) => {
    //console.log("Captialising function received: ", rawData)
    rawData.forEach((i) => categoryData.push(CapitalizeFirstLetterEveryWord(i)))
    //console.log("Capitalising function returning: ", categoryData)
    }
  
export default async function returnCategories(){
    captialiseData(await getCategoriesFromAPI())
    //console.log("returnCategory returning: ", categoryData)
    return categoryData
}

export const ClearData = () =>{
  categoryData = []
}
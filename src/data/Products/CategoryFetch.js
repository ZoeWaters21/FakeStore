import { CapitalizeFirstLetterEveryWord } from "../../Functions/StringManipulation";
import { ServerDomain } from "../Constants";

let categoryData = []

const URLExtension = "/products/categories"


  const getCategoriesFromAPI = async () => {
    try {
      const fetchData = await fetch(ServerDomain+URLExtension);
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
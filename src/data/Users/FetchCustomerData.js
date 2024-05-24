let customerData = {}

const getCustomerDataFromAPI = async (customerEmail) => {
  try {
    console.log("Placeholder for server data")
    const rawData = {
      "status": "OK",
      "name": "John Doe",
      "email": "john.doe@example.com",
      "id": 1,
      "token": "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9..."
    }
    return rawData
  } catch (error) {
    console.error(error);
  }
};


export default async function returnCustomerData(customerEmail){
  customerData = await getCustomerDataFromAPI(customerEmail)
  //console.log(await "returnCategory returning: ", productData)
  return customerData
}
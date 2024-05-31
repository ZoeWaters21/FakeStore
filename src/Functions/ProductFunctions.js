import { ServerDomain, URLExtensions } from "../data/Constants"

export const ReduceFetchedItems = (fetchData, acceptedKeys) => {
    let reducedData = []
    fetchData.forEach(item =>{
      reducedData.push(Object.keys(item)
      .filter(keys => acceptedKeys.includes(keys))
      .reduce( (newItem, keys) => (newItem[keys] = item[keys], newItem), {}))
    })
    return reducedData
}

export const ReduceDataForCart = (data) => {
  reducedItems = []
  data.forEach(item => {
    reducedItems.push({id:item.id, price:item.price, count:item.count})
  })
  return reducedItems
}

export const ReduceDataForNewOrder = (data) => {
  reducedItems = []
  data.forEach(item => {
    reducedItems.push({prodID:item.id, price:item.price, quantity:item.count})
  })
  return reducedItems
}
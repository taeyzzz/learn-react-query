import { UseQueryResult, useQuery } from "react-query"

import { IProduct, getListProductDynamic } from "../api"

export const GET_LIST_PRODUCT = "GET_LIST_PRODUCT"

const useGetListProductDynamic = (amount: number): UseQueryResult<IProduct[], unknown> => {
  return useQuery(
    [GET_LIST_PRODUCT, amount],
    async () => {
      const products = await getListProductDynamic(amount)
      return products
    }
  )
}

export default useGetListProductDynamic
import { UseQueryResult, useQuery } from "react-query"

import { IProduct, getListProduct } from "../api"

export const GET_LIST_PRODUCT = "GET_LIST_PRODUCT"

const useGetListProduct = (): UseQueryResult<IProduct[], unknown> => {
  return useQuery(
    [GET_LIST_PRODUCT],
    async () => {
      const products = await getListProduct()
      return products
    }
  )
}

export default useGetListProduct
import { UseMutationResult, useMutation, useQueryClient } from "react-query"

import { IProduct, createProduct } from "../api"
import { GET_LIST_PRODUCT } from "./useGetListProductDynamicApi"

export const CREATE_PRODUCT = "CREATE_PRODUCT"

const useCreateProductApi = (): UseMutationResult<IProduct, unknown, void, unknown> => {
  const queryClient = useQueryClient()

  return useMutation(
    CREATE_PRODUCT,
    async () => {
      const product = await createProduct()
      return product
    },
    {
      onSuccess: () => {
        queryClient.invalidateQueries([GET_LIST_PRODUCT])
      }
    }
  )
}

export default useCreateProductApi
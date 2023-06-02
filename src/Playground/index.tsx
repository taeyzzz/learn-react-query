import { memo, useMemo, useState } from "react"

import "./index.scss"
// import useGetListProduct from "../hooks/useGetListProductApi"
import useGetListProductDynamic from "../hooks/useGetListProductDynamicApi"
import useCreateProductApi from "../hooks/useCreateProductApi"
import { useIsFetching } from "react-query"

const Playground = () => {
  const [count, setCount] = useState(1)
  const isFetching = useIsFetching()
  const getListProductApi = useGetListProductDynamic(count)
  const createProductApi = useCreateProductApi()

  const renderListProduct = useMemo(() => {
    const products = getListProductApi.data?.map(p => {
      return (
        <div key={p.id}>
          ID: {p.id} - Name: {p.name}
        </div>
      )
    }) ?? []
    return (
      <div>
        {products}
      </div>
    )
  }, [getListProductApi.data])

  const loadingContainer = (
    <div className="loading-container">
      ...loading
    </div>
  )

  const loading = isFetching ? loadingContainer : null

  return (
    <div className="playground-container">
      hello
      <div>
        <button onClick={() => setCount(c => c-1)}>-</button>
        <button onClick={() => setCount(c => c+1)}>+</button>
      </div>
      <button onClick={() => createProductApi.mutateAsync()}>
        create product
      </button>
      {renderListProduct}
      {loading}
    </div>
  )
}

export default memo(Playground)

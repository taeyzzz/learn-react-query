export interface IProduct {
  id: number
  name: string
}

export const LIST_PRODUCT: IProduct[] = [
  { id: 1, name: "product1" },
  { id: 2, name: "product2" },
  { id: 3, name: "product3" },
]

const wait = (): Promise<void> => {
  return new Promise((resolve) => {
    setTimeout(() => resolve(), 1000)
  })
}

export const getListProduct = async (): Promise<IProduct[]> => {
  await wait()
  return LIST_PRODUCT
}

export const getListProductDynamic = async (amount: number): Promise<IProduct[]> => {
  await wait()
  return [...new Array(amount)].map((_, index) => ({ id: index, name: `product${index}` }))
}

export const createProduct = async (): Promise<IProduct> => {
  await wait()
  const key = LIST_PRODUCT.length + 1
  return {
    id: key,
    name: `product${key}`
  }
}
import { Filter, ProductsContainer, PaginationContainer } from '../components'
import { customFetch } from '../utils'

const allProductsQuery = () => {
  return {
    queryKey: ['products'],
    queryFn: () => customFetch.get('/products'),
  }
}
export const loader = (queryClient) => async () => {
  const { data } = await queryClient.ensureQueryData(allProductsQuery())
  const products = data.data
  const meta = data.meta
  // console.log(data)
  return { products, meta }
}

const Products = () => {
  return (
    <>
      <Filter />
      <ProductsContainer />
      <PaginationContainer />
    </>
  )
}

export default Products

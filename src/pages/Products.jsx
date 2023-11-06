import { Filter, ProductsContainer, PaginationContainer } from '../components'
import { customFetch } from '../utils'

const allProductsQuery = (queryParams) => {
  const { search, category, company, sort, price, shipping, page } = queryParams
  return {
    queryKey: [
      'products',
      search ?? '',
      category ?? 'all',
      company ?? 'all',
      sort ?? 'a-z',
      price ?? 100000,
      shipping ?? false,
      page ?? 1,
    ],
    queryFn: () =>
      customFetch.get('/products', {
        params: queryParams,
      }),
  }
}
export const loader =
  (queryClient) =>
  async ({ request }) => {
    const params = Object.fromEntries([
      ...new URL(request.url).searchParams.entries(),
    ])

    const { data } = await queryClient.ensureQueryData(allProductsQuery(params))
    const products = data.data
    const meta = data.meta
    // console.log(data)
    return { products, meta, params }
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

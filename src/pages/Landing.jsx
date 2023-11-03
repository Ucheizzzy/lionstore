import { FeaturedProducts, Hero } from '../components'
import { customFetch } from '../utils/'

const featuredProductsQuery = {
  queryKey: ['featuredProducts'],
  queryFn: () => customFetch.get('/products?featured=true'),
}
export const loader = (queryClient) => async () => {
  const { data } = await queryClient.ensureQueryData(featuredProductsQuery)
  const products = data.data
  console.log(products)
  return { products }
}
const Landing = () => {
  return (
    <>
      <Hero />
      <FeaturedProducts />
    </>
  )
}

export default Landing

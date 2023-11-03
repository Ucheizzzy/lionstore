import { FeaturedProducts, Hero } from '../components'
import { customFetch } from '../utils'
export const loader = async () => {
  const { data } = await customFetch.get('/products?featured=true')
  console.log(data)
  return null
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

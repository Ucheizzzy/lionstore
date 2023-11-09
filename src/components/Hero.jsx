import { Link } from 'react-router-dom'
import hero1 from '../assets/hero1.webp'
import hero2 from '../assets/hero2.webp'
import hero3 from '../assets/hero3.webp'
import hero4 from '../assets/hero4.webp'
const Hero = () => {
  const carousels = [hero1, hero2, hero3, hero4]
  return (
    <div className='grid grid-cols-1 sm:grid-cols-2 gap-24 items-center'>
      <div>
        <h1 className='max-w-2xl text-4xl font-bold tracking-tight sm:text-6xl'>
          Changing the way you shop
        </h1>
        <p className='mt-8 max-w-xl text-lg leading-8'>
          Welcome to LionStore Application. This is a React Js e-commerce
          project that displays key features of sorting and filtering products,
          adding to cart, checking out and placing orders. I built this
          application using React JS, Tailwind css, Daisy UI, Redux Toolkit and
          React Query for caching and optimization.
        </p>
        <div className='mt-10'>
          <Link className='btn btn-primary' to='products'>
            Our Products
          </Link>
        </div>
      </div>
      <div className='hidden sm:carousel h-[28rem] carousel-center p-4 space-x-4 bg-neutral rounded-box'>
        {carousels.map((image) => {
          return (
            <div key={image} className='carousel-item'>
              <img
                src={image}
                className='rounded-box h-full w-80 object-cover'
              />
            </div>
          )
        })}
      </div>
    </div>
  )
}

export default Hero

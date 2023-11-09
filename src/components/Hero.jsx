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
          Welcome to our e-commerce furniture store! We are passionate about
          bringing stylish and high-quality furniture to your doorstep. With a
          wide range of carefully curated pieces, we strive to transform your
          spaces into functional and beautiful environments.
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

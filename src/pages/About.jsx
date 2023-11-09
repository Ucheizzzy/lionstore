import { Link } from 'react-router-dom'

const About = () => {
  return (
    <>
      <div className='flex flex-wrap gap-2 sm:gap-x-6 items-center justify-center'>
        <h1 className=' text-4xl font-bold leading-none tracking-tight sm:text-6xl'>
          We love
        </h1>
        <div className='stats bg-primary shadow-md'>
          <div className='stat '>
            <div className='stat-title text-primary-content text-4xl font-bold tracking-widest'>
              Lion Store
            </div>
          </div>
        </div>
      </div>
      <p className='mt-6 text-lg leading-8 max-w-2xl mx-auto'>
        At LionStore, we believe that furniture is not just about functionality,
        but also about expressing your unique style and creating a warm and
        inviting atmosphere. Whether you're furnishing your home, office, or any
        other space, we have the perfect pieces to suit your needs. Thank you
        for choosing LionStore as your go-to destination for all your furniture
        needs. We look forward to helping you create a space that truly reflects
        your personal style and enhances your daily living.
        <Link to='/products' className='ms-1 text-primary'>
          Check out our Products
        </Link>
      </p>
    </>
  )
}

export default About

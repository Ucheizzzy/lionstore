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
        Hi, My name is Mr.UCHE and I am a Full Stack Software Engineer Welcome
        to LionStore Application. This is a React Js e-commerce project that
        displays key features of sorting and filtering products, adding to cart,
        checking out and placing orders. I built this application using React
        JS, Tailwind css, Daisy UI, Redux Toolkit and React Query for caching
        and optimization. The API consumed can be found in here
        https://documenter.getpostman.com/view/18152321/2s9Xy5KpTi. Hope you
        enjoy this application
      </p>
    </>
  )
}

export default About

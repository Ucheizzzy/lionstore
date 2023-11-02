import { Outlet } from 'react-router-dom'

const HomeLayout = () => {
  return (
    <>
      <nav>
        <span className='text-4xl text-accent uppercase font-bold'>
          Lion Store
        </span>
      </nav>
      <Outlet />
    </>
  )
}

export default HomeLayout

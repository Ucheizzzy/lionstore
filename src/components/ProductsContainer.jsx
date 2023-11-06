import { useLoaderData } from 'react-router-dom'
import ProductsList from './ProductsList'
import { useState } from 'react'
import { Bs0CircleFill, BsFillGridFill, BsList } from 'react-icons/bs'
import { FaHtml5 } from 'react-icons/fa6'
import ProductsGrid from './ProductsGrid'
const ProductsContainer = () => {
  const { meta } = useLoaderData()
  // console.log(meta)
  const totalProducts = meta.pagination.total
  const [layout, setLayout] = useState('grid')

  const setActiveStyles = (pattern) => {
    return `text-xl btn btn-circle btn-sm ${
      pattern === layout
        ? 'btn-primary text-primary-content'
        : 'btn-ghost text-base-content'
    }`
  }
  return (
    <>
      <div className='flex justify-between items-center mt-8 border-b border-base-300 pb-5'>
        <h4>
          {totalProducts} product{totalProducts > 1 && 's'}
        </h4>
        <div className='flex gao-x-2'>
          <button
            type='button'
            onClick={() => setLayout('grid')}
            className={setActiveStyles('grid')}
          >
            <BsFillGridFill />
          </button>
          <button
            type='button'
            className={setActiveStyles('list')}
            onClick={() => setLayout('list')}
          >
            <BsList />
          </button>
        </div>
      </div>
      <div>
        {totalProducts === 0 ? (
          <h5>Sorry no products matched your search.. </h5>
        ) : layout === 'grid' ? (
          <ProductsGrid />
        ) : (
          <ProductsList />
        )}
      </div>
    </>
  )
}

export default ProductsContainer

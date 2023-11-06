import { useState } from 'react'
import { formatPrice } from '../utils'

const FormRange = ({ label, name, size, price }) => {
  const step = 1000
  const maxPrice = 100000
  const [selectedPrice, setSelectedPrice] = useState(price || maxPrice)
  return (
    <div className='form-control'>
      <label htmlFor={name} className='label cursor-pointer'>
        <span className='label-text capitalize'>{label}</span>
        <span>{formatPrice(selectedPrice)}</span>
      </label>
      <input
        type='range'
        name={name}
        min={0}
        max={maxPrice}
        value={selectedPrice}
        step={step}
        className={`range range-primary ${size}`}
        onChange={(e) => setSelectedPrice(e.target.value)}
      />
      <div className='w-full flex justify-between text-sm px-2 mt-2'>
        <span className='font-bold text-md'>0</span>
        <span className='font-bold text-md'>Max: {formatPrice(maxPrice)}</span>
      </div>
    </div>
  )
}

export default FormRange

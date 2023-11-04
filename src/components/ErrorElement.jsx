import { useRouteError } from 'react-router-dom'

const ErrorElement = () => {
  const error = useRouteError()
  console.log(error.message)
  return (
    <div className='align-element'>
      <h4 className='text-3xl text-red-300'>
        There was an error: {error.message}
      </h4>
    </div>
  )
}

export default ErrorElement

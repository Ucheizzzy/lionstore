import { useRouteError } from 'react-router-dom'

const ErrorElement = () => {
  const error = useRouteError()
  console.log(error.message)
  return (
    <div>
      <h4>There was an error: {error.message}</h4>
    </div>
  )
}

export default ErrorElement

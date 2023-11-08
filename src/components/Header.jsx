import { useQueryClient } from '@tanstack/react-query'
import { useDispatch, useSelector } from 'react-redux'
import { Link, useNavigate } from 'react-router-dom'
import { clearCart } from '../features/cartSlice'
import { logoutUser } from '../features/userSlice'

const Header = () => {
  const navigate = useNavigate()
  const dispatch = useDispatch()
  const queryClient = useQueryClient()
  const { user } = useSelector((state) => state.userState)
  const handleLogout = () => {
    dispatch(clearCart())
    dispatch(logoutUser())
    queryClient.removeQueries()
  }
  return (
    <header className='bg-neutral py-2 text-neutral-content'>
      <div className='align-element flex justify-center sm:justify-end'>
        {user ? (
          <div className='flex gap-x-6 justify-center items-center'>
            <p className='text-xs sm:text-sm'>Hello, {user.username}</p>
            <button
              className='btn btn-xs btn-outline btn-primary'
              onClick={handleLogout}
            >
              Logout
            </button>
          </div>
        ) : (
          <div className='flex gap-x-6 justify-center items-center'>
            <Link to='/login' className='link link-hover text-xs sm:text-sm'>
              Sign In/Guest
            </Link>
            <Link to='/register' className='link link-hover text-xs sm:text-sm'>
              Create an account
            </Link>
          </div>
        )}
      </div>
    </header>
  )
}

export default Header

import { Form, Link, redirect, useNavigate } from 'react-router-dom'
import { FormInput, SubmitBtn } from '../components'
import { customFetch } from '../utils'
import { loginUser } from '../features/userSlice'
import { toast } from 'react-toastify'
import { useDispatch } from 'react-redux'

export const action =
  (store) =>
  async ({ request }) => {
    const formData = await request.formData()
    const data = Object.fromEntries(formData)
    try {
      const response = await customFetch.post('/auth/local', data)
      store.dispatch(loginUser(response.data))
      toast.success('Logged in successfully')
      return redirect('/')
    } catch (error) {
      toast.error(
        error?.response?.data?.error?.message || 'Please check your credentials'
      )
      return null
    }
  }
const Login = () => {
  const dispatch = useDispatch()
  const navigate = useNavigate()
  const loginGuestUser = async () => {
    try {
      const response = await customFetch.post('/auth/local', {
        identifier: 'test@test.com',
        password: 'secret',
      })
      dispatch(loginUser(response.data))
      toast.success('Guest user mode')
      navigate('/')
    } catch (error) {
      toast.error(
        error?.response?.data?.error?.message || 'Guest user login failed'
      )
    }
  }
  return (
    <section className='auth-layout'>
      <Form method='POST' className='auth-form'>
        <h4 className='text-center text-3xl font-bold'>Login</h4>
        <FormInput
          type='email'
          name='identifier'
          label='email'
          defaultValue='test@test.com'
        />
        <FormInput
          type='password'
          name='password'
          label='password'
          defaultValue='secret'
        />
        <div className='mt-4'>
          <SubmitBtn text='Login' />
        </div>
        <button
          type='button'
          className='btn btn-secondary btn-block'
          onClick={loginGuestUser}
        >
          Guest User
        </button>
        <p>
          No account yet?
          <Link to='/register' className='link link-success ms-2'>
            Register
          </Link>
          <Link to='/' className='ms-3 link link-primary'>
            Back to home
          </Link>
        </p>
      </Form>
    </section>
  )
}

export default Login

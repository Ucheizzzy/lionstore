import { Form, Link, redirect } from 'react-router-dom'
import { FormInput, SubmitBtn } from '../components'
import { customFetch } from '../utils'
import { toast } from 'react-toastify'
export const action = async ({ request }) => {
  const formData = await request.formData()
  const data = Object.fromEntries(formData)
  try {
    const response = await customFetch.post('/auth/local/register', data)
    console.log(response)
    toast.success('account created, Login now')
    return redirect('/login')
  } catch (error) {
    toast.error(
      error?.response?.data?.error?.message || 'Please check your credentials'
    )
    return null
  }
}
const Register = () => {
  return (
    <section className='auth-layout'>
      <Form method='POST' className='auth-form'>
        <h4 className='text-center text-3xl font-bold'>Register</h4>

        <FormInput type='text' name='username' label='username' />
        <FormInput type='email' name='email' label='email' />
        <FormInput type='password' name='password' label='password' />

        <div className='mt-4'>
          <SubmitBtn text='register' />
        </div>
        <p>
          Already registered?
          <Link to='/login' className='link link-secondary ms-2'>
            Login
          </Link>
          <Link to='/' className='ms-3 link link-primary'>
            Back to home
          </Link>
        </p>
      </Form>
    </section>
  )
}

export default Register

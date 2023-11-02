import { Form, Link } from 'react-router-dom'
import { FormInput, SubmitBtn } from '../components'

const Login = () => {
  return (
    <section className='h-screen grid place-items-center'>
      <Form
        method='POST'
        className=' card w-96  p-8 bg-base-100 shadow-lg flex flex-col gap-y-4'
      >
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
        <button className='btn btn-secondary btn-block'>Guest User</button>
        <p>
          No account yet?{' '}
          <Link to='/register' className='link link-success'>
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

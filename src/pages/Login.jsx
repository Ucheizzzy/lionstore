import { Form, Link } from 'react-router-dom'
import { FormInput, SubmitBtn } from '../components'

const Login = () => {
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
        <button type='button' className='btn btn-secondary btn-block'>
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

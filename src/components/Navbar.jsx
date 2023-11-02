import { useState } from 'react'
import { BsCart3, BsMoonFill, BsSunFill } from 'react-icons/bs'
import { FaBarsStaggered } from 'react-icons/fa6'
import { useDispatch } from 'react-redux'
import { NavLink } from 'react-router-dom'
import { toggleTheme } from '../features/userSlice'
const Navbar = () => {
  const dispatch = useDispatch()

  return (
    <nav className='bg-base-200'>
      <div className='navbar align-element'>
        <div className='navbar-start'>
          <NavLink
            to='/'
            className='hidden sm:flex btn btn-primary text-3xl items-center'
          >
            LS
          </NavLink>

          <div className='dropdown'>
            <label tabIndex={0} className='btn btn-ghost sm:hidden'>
              <FaBarsStaggered className='h-6 w-6' />
            </label>
            <ul
              tabIndex={0}
              className='menu menu-sm dropdown-content mt-3 z-[-1] p-2 shadow-md bg-base-200 rounded-box w-52'
            >
              navlinks
            </ul>
          </div>
          <div className='navbar-center hidden sm:flex'>
            <ul className='menu menu-horizontal'>navlinks</ul>
          </div>
          <div className='navbar-end'>
            {/* theme icons */}
            <label className='swap swap-rotate'>
              <input type='checkbox' onClick={() => dispatch(toggleTheme())} />
              <BsSunFill className='swap-on h-4 w-4' />
              <BsMoonFill className='swap-off h-4 w-4' />
            </label>
            {/* cart link */}
            <NavLink to='cart' className='btn btn-ghost btn-circle ml-4'>
              <div className='indicator'>
                <BsCart3 className='h-6 w-6' />
                <span className='badge badge-sm badge-primary indicator-item'>
                  0
                </span>
              </div>
            </NavLink>
          </div>
        </div>
      </div>
    </nav>
  )
}

export default Navbar
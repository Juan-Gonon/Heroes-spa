import { Link, NavLink, useNavigate } from 'react-router-dom'
import { useAuth } from '../../hooks/useAuth'

export const Navbar = () => {
  const { user = {} } = useAuth()
  const handleLogout = () => {
    // console.log('logAut')
    navigate('/login', {
      replace: true
    })
  }

  const navigate = useNavigate()

  return (
    <nav className='navbar navbar-expand-sm navbar-dark bg-dark p-2 '>

      <Link
        className='navbar-brand'
        to='/'
      >
        Asociaciones
      </Link>

      <div className='navbar-collapse'>
        <div className='navbar-nav'>

          <NavLink
            className={({ isActive }) => `nav-item nav-link ${isActive ? 'active' : ''}`}
            to='/marvel'
          >
            Marvel
          </NavLink>

          <NavLink
            className={({ isActive }) => `nav-item nav-link ${isActive ? 'active' : ''}`}
            to='/dc'
          >
            DC
          </NavLink>P
          <NavLink
            className={({ isActive }) => `nav-item nav-link ${isActive ? 'active' : ''}`}
            to='/search'
          >
            Search
          </NavLink>

        </div>
      </div>

      <div className='navbar-collapse collapse w-100 order-3 dual-collapse2 d-flex justify-content-end  '>
        <ul className='navbar-nav ml-auto'>
          <span className='nav-item nav-link text-primary'>{user?.name}</span>
          <button className='nav-item nav-link btn' onClick={handleLogout}>LogOut</button>
        </ul>
      </div>
    </nav>
  )
}

import {NavLink, Outlet} from 'react-router-dom'

export default function Root() {
  return (
    <div className="m-auto max-w-7xl">
      <nav>
        <ul className="mx-4 my-2 flex justify-end">
          <li className="mr-4">
            <NavLink
              to="/"
              className={({isActive}) => (isActive ? 'underline' : '')}
            >
              Home
            </NavLink>
          </li>
          <li>
            <NavLink
              to="/profile"
              className={({isActive}) => (isActive ? 'underline' : '')}
            >
              Profile
            </NavLink>
          </li>
        </ul>
      </nav>
      <div className="m-8">
        <Outlet />
      </div>
    </div>
  )
}

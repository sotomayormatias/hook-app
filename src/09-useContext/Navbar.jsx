import { Link, NavLink } from "react-router-dom"

export const Navbar = () => {
  return (
    <nav className="navbar navbar-expand-lg bg-body-tertiary">
      <div className="container-fluid">
        <Link className="navbar-brand" to="/">Home</Link>
        <div className="collapse navbar-collapse" id="navbarNav">
          <ul className="navbar-nav">
            <NavLink className={({isActive})=> `nav-link ${isActive ? 'active' : ''}`} aria-current="page" to="/login">Login</NavLink>
            <NavLink className={({isActive})=> `nav-link ${isActive ? 'active' : ''}`} to="/about">About</NavLink>
          </ul>
        </div>
      </div>
    </nav>
  )
}

import React from 'react'
import { Link } from 'react-router-dom'
import './Navbar.css';

const Navbar = () => {
  return (
    <div>
      <div className="container-xxl p-0">
        <nav className="navbar navbar-expand-lg navbar-dark bg-dark px-4 px-lg-5 py-3 py-lg-0">
          <Link to="/" className="navbar-brand p-0">
            <h1 className="text-primary m-0"><i className="fa fa-utensils me-3"></i>Appetite</h1>
          </Link>
          <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarCollapse">
            <span className="fa fa-bars"></span>
          </button>
          <div className="collapse navbar-collapse" id="navbarCollapse">
            <div className="navbar-nav ms-auto py-0 pe-4">
              <Link to="/home" className="nav-item nav-link active">Home</Link>
              <Link to="/about" className="nav-item nav-link">About</Link>
              <Link to="/menu" className="nav-item nav-link">Menu</Link>
              <Link to="/booking" className="nav-item nav-link">Booking</Link>
              <Link to="/contact" className="nav-item nav-link">Contact</Link>
            </div>
            <Link to='/login' class='btn btn-primary py-2 px-4'>Login</Link>
          </div>
        </nav>
      </div>
    </div>
  )
}

export default Navbar
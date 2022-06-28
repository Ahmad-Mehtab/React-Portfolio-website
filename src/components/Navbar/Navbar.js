import React from 'react';
import './Navbar.css';
import {Link} from 'react-scroll';

function Navbar() {
  return (
 
  <div className="container-fluid">
  <nav className="navbar navbar-expand-lg navbar-light ">
    <a className="navbar-brand logo" >DevNative</a>
    <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
      <span className="navbar-toggler-icon"></span>
    </button>
    <div className="collapse navbar-collapse " id="navbarSupportedContent">
      <ul className="navbar-nav gap-1 ms-auto mb-2 mb-lg-0  justify-content-lg-end">
      <Link spy={true} to='Navbar' smooth={true} activeClass="activeClass">
      <li className="nav-item">
          <a className="nav-link">Home</a>
        </li>
      </Link>
        <Link spy={true} to='Services' smooth={true}>
        <li className="nav-item">
          <a className="nav-link" >Services</a>
        </li>
        </Link>
        <Link spy={true} to='Experience' smooth={true}>
        <li className="nav-item">
          <a className="nav-link" >Experience</a>
        </li>
        </Link>
        <Link spy={true} to='Portfolio' smooth={true}>
        <li className="nav-item">
          <a className="nav-link" >Portfolio</a>
        </li>
        </Link>
        <Link spy={true} to='Testimonial' smooth={true}>
        <li className="nav-item">
          <a className="nav-link" >Testimonial</a>
        </li>
        </Link>
      </ul>
      <form className="d-flex"> 
      <Link spy={true} to='Contact' smooth={true}>
       <button className="button">Contact us</button>
      </Link>
      </form>
    </div>
</nav>
</div>
    
  )
}

export default Navbar


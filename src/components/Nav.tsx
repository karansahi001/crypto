import React from 'react'
import { LinkContainer } from 'react-router-bootstrap'

const Nav: React.FC = () => {
  return (
    <nav className="navbar navbar-light bg-dark">
          <LinkContainer to="/" >
        <div className="container-fluid align-items-center " role='button'>

          <span className="navbar-brand mb-0 h1 badge bg-info text-light fw-bold rounded-circle" style={{height: "35px", fontSize: "20px"}}>iCrypto</span>
        </div>
          </LinkContainer>
      </nav>
  )
}

export default Nav
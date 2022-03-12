import React from 'react'

function index({ onChange }) {
  return (
    <nav className="navbar navbar-light bg-dark">
      <div className="container-fluid">
        <a className="navbar-brand fw-bold text-info">Crypto Tracker</a>
        <form className="d-flex">
          <input className="form-control me-2" type="search" placeholder="Search" aria-label="Search" onChange={onChange}/>
          {/* <button className="btn btn-outline-light" type="submit">Search</button> */}
        </form>
      </div>
    </nav>
  )
}

export default index;
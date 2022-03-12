import React from 'react'

const Column = () => {
  return (
    <div className="container pt-5 justify-content-center align-items-center">
        <div className="row text-info text-align-center" style={{fontSize: "18px"}}>
            <div className="col">
                <p className="fw-bold">Coin</p>
            </div>
            <div className="d-none d-md-block col">
                <p className="fw-bold">Symbol</p>
            </div>
            <div className="d-none d-md-block col">
                <p className="fw-bold">Mkt Cap</p>
            </div>
            <div className="col">
                <p className="fw-bold">Price</p>
            </div>
            <div className="col">
                <p className="fw-bold">% Change</p>
            </div>
        </div>
    </div>
  )
}

export default Column
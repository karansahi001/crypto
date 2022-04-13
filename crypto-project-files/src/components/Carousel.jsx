import React from 'react'
import { LinkContainer } from 'react-router-bootstrap'

const Carousel = ({ id, image, price, symbol, change }) => {
    return (
        <LinkContainer to={`/coin/${id}`}>
            <div className="container justify-content-center align-items-center">

                <div className="card bg-transparent border-0 text-center text-light" role='button' style={{ width: '5rem' }}>

                    <img src={image} className="card-img-top bg-transparent" alt={symbol} />
                    <div className="card-body text-center">
                        <p className="card-text text-uppercase">{symbol} <span className={change >= 0 ? "text-success" : "text-danger"}>{change}%</span></p>
                        <p className="card-text text-center">${price.toFixed(1)}</p>


                        {/* <p className="card-text">Some quick example text to build on the card title and make up the bulk of the card's content.</p> */}
                    </div>
                </div>
            </div>
        </LinkContainer>
    )
}

export default Carousel
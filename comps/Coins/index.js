import React from 'react'

const index = ({ image, name, symbol, cap, price, change }) => {
    return (
        <div>
            <div className="container">
                <div className="row justify-content-center align-items-center text-light text-align-center mb-3 mt-3">
                    <div className="col d-flex">
                        <img src={image} alt={name} height="30px" width="30px" />
                        <p className="ms-3">{name}</p>
                    </div>
                    <div className="d-none d-md-block col">
                        <p>{symbol.toUpperCase()}</p>
                    </div>
                    <div className="d-none d-md-block col">
                        <p>${cap.toLocaleString()}</p>
                    </div>
                    <div className="col">
                        <p>${price.toLocaleString()}</p>
                    </div>
                    <div className="col">
                        <p className={change > 0 ? "text-success" : "text-danger"}>{change.toLocaleString(2)}%</p>
                    </div>
                    <hr className="bg-info" />
                </div>

            </div>
        </div>
    )
}


export default index;
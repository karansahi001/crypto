import axios from 'axios';
import React, { useEffect, useState } from 'react'
import { useParams } from 'react-router'
import Nav from "./Nav"
import parse from 'html-react-parser'
import Chart from './Chart';



const Coin = () => {

  const { id } = useParams();
  const [coin, setCoin] = useState([]);
  


  const fetchCoin = async () => {
    const { data } = await axios.get(`https://api.coingecko.com/api/v3/coins/${id}?tickers=true&market_data=true&community_data=true&developer_data=false&sparkline=true`)
    setCoin(data)

  }

  useEffect(() => {
    fetchCoin()

  }, []);


  return (
    <>
      <Nav />
     

        <div className="container-fluid bg-dark">
          <div className="row">
            <div className="col text-center mt-4">
              <p className="display-4 text-light fw-bold">{coin?.name}<span className={`fs-5 fw-normal align-top ${coin.market_data && coin.market_data.price_change_percentage_24h > 0 ? "text-success" : "text-danger"}`}>{coin.market_data && coin.market_data?.price_change_percentage_24h.toFixed(2)}%</span></p>
              <img className="my-4" src={coin.image && coin.image.large} alt={coin?.name} />


              <p className="lead text-light text-decoration-none my-3">{coin.description && parse(coin.description.en.split(". ")[0])}</p>
            </div>

          </div>

          <div className="row py-5  ms-5">
            <div className="col-12 col-md col-lg text-start">
              <p className="display-6 text-light "><span className=" me-3 text-info">Ticker:</span><span className="text-uppercase">{coin?.symbol}</span></p>
              <p className="display-6 text-light "><span className="me-3 text-info">Market Cap:</span><span className="text-uppercase">${coin.market_data && coin.market_data.market_cap.cad.toLocaleString()}</span></p>
            </div>
            <div className="col-12 col-md col-lg text-start">
              <p className="display-6 text-light "><span className=" me-3 text-info">Rank:</span><span className="text-uppercase">{coin?.coingecko_rank}</span></p>
              <p className="display-6 text-light "><span className=" me-3 text-info">Current Price:</span><span className="text-uppercase">${coin.market_data && coin.market_data.current_price.cad.toLocaleString()}</span></p>

            </div>

          </div>
          <Chart key={id} id={id} />
        </div>

    </>
  )
}

export default Coin
import React, { useEffect, useState } from 'react'
import { CoinList } from '../api'
import axios from 'axios'
import { LinkContainer } from 'react-router-bootstrap';


const List: React.FC = () => {

  const [coins, setCoins] = useState<any[]>([]);
  const [search, setSearch] = useState<string>('');
  const [loading, setLoading] = useState<boolean>(true);

  const fetch = async (): Promise<void> => {
    const { data } = await axios.get(CoinList());
    console.log(data)
    setCoins(data)
    setLoading(false)
  }

  useEffect(() => {
    fetch();
  }, [])

  const handleSearch = (): any[] => {
    return coins.filter(
      (coin) =>
        coin.name.toLowerCase().includes(search) ||
        coin.symbol.toLowerCase().includes(search)
    );
  };


  return (
    <div className="container mt-5 py-5 align-items-center">
      <div className="container text-center mb-5">

        <h2 className="display-4 text-light mb-5">Crypto Currency Prices</h2>
        <input type="text" onChange={(e: React.ChangeEvent<HTMLInputElement>) => setSearch(e.target.value)} className="form-control mt-4 bg-dark text-light" placeholder="Search a Crypto Currency" aria-label="Recipient's username" ></input>
      </div>
      {loading ?
        <div className="d-flex justify-content-center">
          <div className="spinner-border text-info" role="status">
            <span className="visually-hidden">Loading...</span>
          </div>
        </div>
        :

        <table className="table table-dark table-hover align-items-center">
          <thead className=" table-striped h3 text-center text-info">
            <tr>
              <th className="text-start" scope="col">Coin</th>
              <th scope="col">Price</th>
              <th scope="col">24h Change</th>
              <th scope="col">Mkt Cap</th>
            </tr>
          </thead>
          <tbody className="justify-content-center align-items-center" role='button'>
            {handleSearch().map((coin) => {
              return (
                <LinkContainer key={coin.id} to={`coin/${coin.id}`} >
                  <tr className="align-items-center lead ">
                    <th scope="row" className="h3 fw-normal py-5 align-items-center"><img src={coin.image} width="45px" className="me-2" />{coin.name}</th>
                    <td className="py-5 text-center">${coin.current_price.toLocaleString()}</td>
                    <td className={`py-5 text-center ${coin.price_change_percentage_24h > 0 ? "text-success" : "text-danger"}`}>{coin.price_change_percentage_24h.toFixed(2)}%</td>
                    <td className="py-5 text-center">${coin.market_cap.toLocaleString()}</td>
                  </tr>
                </LinkContainer>

              )
            })}
          </tbody>

        </table>
      }
    </div>
  )
}

export default List
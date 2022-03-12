import Coins from '../Coins';

const index = ({data}) => {
  return (
    <>
      {data.map((coin) => {
        return (
          <Coins 
            key={coin.id}
            image= {coin.image}
            name= {coin.name}
            symbol= {coin.symbol}
            cap = {coin.market_cap}
            price = {coin.current_price}
            change = {coin.price_change_percentage_24h}
          />
        )
      })}
    </>
  )
}

export default index
import Head from 'next/head'
import Image from 'next/image'
import styles from '../styles/Home.module.css'
import CoinsList from '../comps/CoinsList'
import Nav from '../comps/Nav'
import Column from '../comps/Coins/column'
import React, { useState } from 'react'


export const getStaticProps = async () => {
  const res = await fetch('https://api.coingecko.com/api/v3/coins/markets?vs_currency=cad&order=market_cap_desc&per_page=100&page=1&sparkline=false');
  const data = await res.json();

  return{
      props: {data}
  }
}

export default function Home({data}) {
  const [search, setSearch] = useState('');

  const allCoins = data.filter((coin) => 
    coin.name.toLowerCase().includes(search.toLowerCase())
  )

  const handleChange = (e) => {
    e.preventDefault();
    setSearch(e.target.value.toLowerCase())
  }

  return (
    <>
      <Nav onChange={handleChange} />
      <div className="container mt-5 bg-dark" style={{borderRadius: "22px"}}>
        <Head>
          <title>Crypto Tracker</title>
          <meta name="description" content="Generated by create next app" />
          <link rel="icon" href="/favicon.ico" />
        </Head>
        <div className="mb-3">
          <Column />
        </div>
        <CoinsList data = {allCoins}/>
        
      </div>
    </>
  )
}



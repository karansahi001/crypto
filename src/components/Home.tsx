import React from 'react'
import Nav from './Nav'
import Banner from './Banner'
import List from './List'


const Home: React.FC = () => {
  return (
    <div className= "bg-dark">
        <Nav />
        <Banner />
        <List />
    </div>
  )
}

export default Home
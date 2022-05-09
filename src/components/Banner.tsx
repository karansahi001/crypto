import React, { useEffect, useState } from 'react'
import { TrendingCoins } from "../api";

import axios from "axios";
import Carousel from './Carousel';
import AliceCarousel from 'react-alice-carousel';


const Banner: React.FC = () => {

    const [trending, setTrending] = useState<any[]>([]);
    const [loading, setLoading] = useState<boolean>(true)

    const fetch = async () => {
        const { data } = await axios.get(TrendingCoins());
        console.log(data);
        setTrending(data);
        setLoading(false)
    }

    useEffect(() => {
        fetch();
    }, [])

    const items = trending.map((coin) => {
        return (
            <Carousel
                key={coin.id}
                id={coin.id}
                image={coin.image}
                price={coin.current_price}
                symbol={coin.symbol}
                change={coin.price_change_percentage_24h.toFixed(2)}
            />)
    });

    const responsive = {
        0: {
            items: 2,
        },
        512: {
            items: 5,
        }
    }

    return (
        <div className="container-fluid bg-dark" style={{
            backgroundColor: "#34AED1"

        }}>
            <div className="row justify-content-center align-items-center">
                <div className="col-12 text-center my-4">
                    <h1 className="display-1 text-light fw-bold ">iCrypto</h1>
                    <p className="lead text-light">Best place to get Crypto real-time price updates</p>
                </div>
                <div className="col-12 mt-5" >
                    {loading ?
                    <div className="d-flex justify-content-center">

                        <div className="spinner-border text-info" role="status">
                            <span className="visually-hidden">Loading...</span>
                        </div> 
                    </div>
                    : <AliceCarousel
                            mouseTracking
                            infinite
                            autoPlayInterval={1800}
                            animationDuration={1500}
                            disableButtonsControls
                            disableDotsControls
                            responsive={responsive}
                            autoPlay
                            items={items}

                        />}


                </div>
            </div>
        </div>
    )
}

export default Banner
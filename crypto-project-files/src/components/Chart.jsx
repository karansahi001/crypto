import React, { useEffect, useState } from 'react'
import { HistoricalChart } from '../api';
import axios from 'axios'
import { Line } from 'react-chartjs-2';
import { Chart as ChartJS } from 'chart.js/auto'
import { cdays } from '../cdays';

const Chart = (props) => {

    const [pricedata, setPricedata] = useState();
    const [days, setDays] = useState(1);

    const fetch = async () => {
        const { data } = await axios.get(HistoricalChart(props.id, days))
        setPricedata(data.prices);
    }

    // console.log(pricedata);

    useEffect(() => {
        fetch()
    }, [days])

    return (
        <div className="container mt-5" style={{width: "68vw"}}>
            <div className="row text-center">
                <div className="col-12 mb-5">
                    {cdays.map((cday) => {
                        return (<button className="btn btn-outline-info mx-4 px-4" onClick={() => setDays(cday.value)} value={cday.value}>{cday.label}</button>)
                    })}
                </div>
            </div>
            <div className="row">
                <div className="col">

                    {pricedata &&
                        <Line
                            data={{
                                labels: pricedata.map((coin) => {
                                    let date = new Date(coin[0]);
                                    let time =
                                        date.getHours() > 12
                                            ? `${date.getHours() - 12}:${date.getMinutes()} PM`
                                            : `${date.getHours()}:${date.getMinutes()} AM`;
                                    return days === 1 ? time : new Date(date).toLocaleDateString();
                                }),
                               
                                datasets: [
                                    {
                                        label: `${props.id.toUpperCase()} Prices in CAD`,
                                        data: pricedata.map((coin) => coin[1]),
                                        backgroundColor: ["#0dcaf0"],
                                        borderColor: ["#0dcaf0"],
                                    }
                                ]
                            }}
                            options={{
                                
                                elements: {
                                   
                                    point: {
                                        radius: 1
                                    }
                                }
                            }}

                        />
                    }
                </div>
            </div>


        </div>
    )
}

export default Chart
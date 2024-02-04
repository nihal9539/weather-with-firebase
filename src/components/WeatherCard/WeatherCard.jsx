import axios from 'axios'
import React, { useEffect, useState } from 'react'
import clear_icon from "../../assets/image/clear.png"
import cloud_icon from "../../assets/image/cloud.png"
import drizzle_icon from "../../assets/image/drizzle.png"
import rain_icon from "../../assets/image/clear.png"
import snow_icon from "../../assets/image/clear.png"

const WeatherCard = ({search}) => {
    const [weatherData, setWeatherData] = useState({})
    const [weatherIcon, setWeatherIcon] = useState()

    useEffect(() => {
        const API_KEY = "7303258013f10842f9d639254807ac00"
        axios(`https://api.openweathermap.org/data/2.5/weather?q=${search}&appid=${API_KEY}&units=metric`).then((res) => {
            setWeatherData(res.data)

        })
    }, [weatherData])

    console.log(weatherData);

    return (
        <div className="max-w-sm  border border-gray-500 w-96 rounded-lg bg-transparent backdrop-blur-sm ">

            <div className=" flex justify-center items-center">
                <img className="" src={clear_icon} width={220} alt="Loading.." />
            </div>

            <div className="p-5">
                <div>
                    <h1 className="mb-2 text-4xl text-center   text-white ">{weatherData?.main?.temp} °c </h1>
                    <h1 className="mb-2 text-4xl text-center   text-white ">{weatherData?.name}  </h1>
                </div>

                <div className='flex flex-row justify-between items-end text-white'>
                    <div className='flex flex-col items-center'>
                        <div>
                            <span>{weatherData?.main?.humidity}%</span>
                            <img src="./humidity.png" alt="" width={25} />
                        </div>
                        <div><span className='text-xs'>Humidity</span></div>
                    </div>
                    <div className='flex flex-col items-center'>
                        <div className='flex flex-row gap-1'>
                            <img src="./wind.png" alt="" width={23} />
                            <span className='text-sm'>{weatherData?.wind?.speed}km/h</span>
                        </div>
                        <div>
                            <span className='text-xs'>Wind Speed</span>
                        </div>
                    </div>
                </div>

            </div>
        </div>
    )
}

export default WeatherCard

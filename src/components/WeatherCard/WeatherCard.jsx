import axios from 'axios'
import React, { useEffect, useState } from 'react'

const WeatherCard = () => {
    const [weatherData, setWeatherData] = useState({})

    useEffect(() => {
        const API_KEY = "7303258013f10842f9d639254807ac00"
        axios(`https://api.openweathermap.org/data/2.5/weather?q=Delhi&appid=${API_KEY}&units=metric`).then((res) => {
            console.log(res.data);
            setWeatherData(res.data)

        })
    }, [])
  return (
    <div className="max-w-sm  border border-gray-500 rounded-lg bg-transparent ">

                <img className="rounded-t-lg" src="/img-2.jpg" alt="Loading.." />

                <div className="p-5">

                    <div>
                    <h1 className="mb-2 text-4xl text-center   text-white ">{weatherData?.main?.temp} °c </h1>
                    <h1 className="mb-2 text-4xl text-center   text-white ">{weatherData?.name}  </h1>
                    </div>

                    <div className='flex flex-row justify-between text-white'>
                        <div>
                            <span>{weatherData?.main?.humidity}%</span>
                            <img src="./humidity.png" alt="" width={25} />
                        </div>
                        <div className='flex flex-col items-center'>
                            <span>{weatherData?.wind?.speed}km/h</span>
                            <img src="./wind.png" alt="" width={25} />
                        </div>
                    </div>

                </div>
            </div>
  )
}

export default WeatherCard

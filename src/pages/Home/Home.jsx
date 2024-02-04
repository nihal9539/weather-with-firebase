import axios from 'axios'
import React, { useEffect, useState } from 'react'

import clear_icon from "../../assets/image/clear.png"
import cloud_icon from "../../assets/image/cloud.png"
import drizzle_icon from "../../assets/image/drizzle.png"
import rain_icon from "../../assets/image/clear.png"
import snow_icon from "../../assets/image/snow.png"
import thunderstorm_icon from "../../assets/image/thunderstorm.png"
import { BiSearchAlt2 } from 'react-icons/bi'
import WeatherCard from '../../components/WeatherCard/WeatherCard'
const Home = () => {
    const [search, setSearch] = useState("")
    const [icon, setIcon] = useState(clear_icon)
    const [weatherData, setWeatherData] = useState({})
    const [weatherIcon, setWeatherIcon] = useState()
    const [value, setValue] = useState()

    useEffect(() => {
        const API_KEY = "7303258013f10842f9d639254807ac00"
        axios(`https://api.openweathermap.org/data/2.5/weather?q=${search ? search : "Delhi"}&appid=${API_KEY}&units=metric`).then((res) => {
            console.log(res.data);
            console.log(res.data.weather[0].icon);
            if (res.data.weather[0].icon == "01d" || res.data.weather[0].icon == "01n") {
                setIcon(clear_icon)

            }
            else if (res.data.weather[0].icon == "04d" || res.data.weather[0].icon == "04n") {

                setIcon(drizzle_icon)
            }
            else if (res.data.weather[0].icon == "02d" || res.data.weather[0].icon == "02n") {

                setIcon(cloud_icon)
            }
            else if (res.data.weather[0].icon == "03d" || res.data.weather[0].icon == "03n") {
                setIcon(drizzle_icon)

            }
            else if (res.data.weather[0].icon == "09d" || res.data.weather[0].icon == "09n") {
                setIcon(rain_icon)

            }
            else if (res.data.weather[0].icon == "010d" || res.data.weather[0].icon == "010n") {
                setIcon(rain_icon)

            }
            else if (res.data.weather[0].icon == "013d" || res.data.weather[0].icon == "013n") {
                setIcon(snow_icon)

            }
            else if (res.data.weather[0].icon == "011d" || res.data.weather[0].icon == "011n") {
                setIcon(thunderstorm_icon)

            }
            else {
                setIcon(clear_icon)

            }

            setWeatherData(res.data)

        })
        console.log(icon);
    }, [search])


    const handleSubmit = (e) => {
        e.preventDefault();
        setSearch(value)

    }

    return (
        <div className='p-4 sm:ml-64 flex justify-center items-center flex-col'>


            {/* search bar */}
            <div className='w-full flex justify-center p-10'>
                <form onSubmit={handleSubmit} className=' border-2 border-gray-400 bg-transparent w-10/12 flex flex-row h-10 items-center rounded-md px-2'>
                    <input type="text" className='bg-transparent w-full h-full outline-none  text-white' value={value} onChange={(e) => setValue(e.target.value)} />
                    <div className='w-12 flex items-end justify-center'>
                        <button type='submit'> <BiSearchAlt2 size={25} width={30} color='white' /></button>
                    </div>
                </form>
            </div>

            {/* Weather Card */}
            <WeatherCard weatherData={weatherData} icon={icon} />


        </div>
    )
}

export default Home

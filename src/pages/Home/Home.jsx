import axios from 'axios'
import React, { useEffect, useState } from 'react'

import clear_icon from "../../assets/image/clear.png"
import cloud_icon from "../../assets/image/cloud.png"
import drizzle_icon from "../../assets/image/drizzle.png"
import rain_icon from "../../assets/image/clear.png"
import snow_icon from "../../assets/image/clear.png"
import { BiSearchAlt2 } from 'react-icons/bi'
const Home = () => {
    const [search, setSearch] = useState("")
    const [weatherData, setWeatherData] = useState({})
    const [weatherIcon, setWeatherIcon] = useState()
    const [value, setValue] = useState()

    useEffect(() => {
        const API_KEY = "7303258013f10842f9d639254807ac00"
        axios(`https://api.openweathermap.org/data/2.5/weather?q=${search}&appid=${API_KEY}&units=metric`).then((res) => {
            console.log(res.data);
            setWeatherData(res.data)

        })
    }, [search])

    const handleSubmit =(e)=>{
        e.preventDefault();
        setSearch(value)

    }
    console.log(search);
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


        </div>
    )
}

export default Home

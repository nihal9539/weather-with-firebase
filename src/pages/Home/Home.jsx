import axios from 'axios'
import React, { useEffect, useState } from 'react'

import SearchBar from '../../components/SearchBar/SearchBar';
import WeatherCard from '../../components/WeatherCard/WeatherCard';

const Home = () => {
   
    return (
        <div className='p-4 sm:ml-64 flex justify-center items-center flex-col'>

            <SearchBar/>
            <WeatherCard/>


        </div>
    )
}

export default Home

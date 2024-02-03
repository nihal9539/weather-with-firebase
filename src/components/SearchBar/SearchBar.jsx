import React, { useState } from 'react'
import { BiSearchAlt2 } from 'react-icons/bi'

const SearchBar = ({search,setSearch}) => {

  const [value,setValue]=useState("")
  const handleSubmit = ()=>{

  }
  
  return (
    <div className='w-full flex justify-center p-10'>
      <form onSubmit={handleSubmit}  className=' border-2 border-gray-400 bg-transparent w-10/12 flex flex-row h-10 items-center rounded-md px-2'>
        <input type="text" className='bg-transparent w-full h-full outline-none  text-white' value={value}  onChange={(e)=>setValue(e.target.value)}/>
        <div className='w-12 flex items-end justify-center'>
         <button type='submit'> <BiSearchAlt2  size={25} width={30} color='white' /></button>
        </div>
      </form>
    </div>

  )
}

export default SearchBar

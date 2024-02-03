import React from 'react'
import { BiSearchAlt2 } from 'react-icons/bi'

const SearchBar = () => {
  return (
    <div className='w-full flex justify-center p-10'>
                <div className=' border-2 border-gray-400 bg-transparent w-10/12 flex flex-row h-10 items-center rounded-md px-2'>
                    <input type="text" className='bg-transparent w-full h-full outline-none  text-white' />
                    <div className='w-12 flex items-end justify-center'>
                        <BiSearchAlt2 size={25} width={30} color='white' />
                    </div>
                </div>
            </div>

  )
}

export default SearchBar

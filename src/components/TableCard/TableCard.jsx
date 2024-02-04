import React from 'react'
import { auth, db } from '../../config/firebase-config'
import { useAuthState } from 'react-firebase-hooks/auth'
import { ref, remove } from 'firebase/database'
import { toast } from 'react-toastify'
import { useNavigate } from 'react-router-dom'

const TableCard = ({data}) => {

    const [User, loading] = useAuthState(auth)
    const navigate = useNavigate()
    const handleDelete = (id) => {
        remove(ref(db, 'users/' + User.uid + "/" + id)).then(()=>{
            toast.info("Deleted")
        })

    }
    const handleEdit = (id)=>{
        navigate(`/${id}`)
    }
    
  return (
    <div className='px-5 h-96 rounded-md border backdrop-blur-sm overflow-y-scroll'>
        {data.map((details) => {
          return (
            <>
              <div className='flex flex-row w-full gap-4 text-xs md:text-base  items-center justify-center text-white   p-3'>
                <div className='w-3/12 '>{details.username}</div>
                <div className='w-3/12'>{details.date.slice(0, 10)}</div>
                <div className='w-3/12'>{details.status}</div>
                <div className='w-3/12 flex flex-col gap-2 md:flex-row'>
                  <button className="bg-blue-600 rounded-lg p-2 px-3 " onClick={()=>handleEdit(details.uid)}>Edit</button>
                  <button className="bg-red-600 rounded-lg p-2 px-3" onClick={()=>handleDelete(details.uid)}>Delete</button>

                </div>
              </div>
              <hr />
            </>
          )
        })}


      </div>
  )
}

export default TableCard

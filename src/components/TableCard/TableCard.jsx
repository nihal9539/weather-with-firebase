import React from 'react'
import { auth, db } from '../../config/firebase-config'
import { useAuthState } from 'react-firebase-hooks/auth'
import { ref, remove } from 'firebase/database'
import { toast } from 'react-toastify'

const TableCard = ({data}) => {

    const [User, loading] = useAuthState(auth)
    const handleDelete = (id) => {
        console.log("hii");
        remove(ref(db, 'users/' + User.uid + "/" + id)).then(()=>{
            toast.info("Deleted")
        })

    }
    
  return (
    <div className='px-5 h-96 rounded-md border backdrop-blur-sm overflow-y-scroll'>
        {data.map((details) => {
          return (
            <>
              <div className='flex flex-row w-full gap-4 items-center justify-center text-white   p-3'>
                <div className='w-3/12'>{details.username}</div>
                <div className='w-3/12'>{details.date.slice(0, 10)}</div>
                <div className='w-3/12'>{details.status}</div>
                <div className='w-3/12 flex flex-row gap-2 '>
                  <button className="bg-blue-600 rounded-lg p-2 px-4">Edit</button>
                  <button className="bg-red-600 rounded-lg p-2 px-4" onClick={()=>handleDelete(details.uid)}>Delete</button>

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

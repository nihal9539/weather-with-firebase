

import { data } from "../../data/text";
import { useTable } from "react-table";
import Table from "../Table/Table";
import AddUserModel from "../../AddUserModel/AddUserModel";
import { useState } from "react";

function Users() {
 const datas = [
  {
    username:"nihal"
  },
  {
    username:"nihal"
  },
  {
    username:"nihal"
  },
  {
    username:"nihal"
  },
 ]

 const [ modelOpen,setModelOpen] = useState(false)
  return (
 


    <div className='p-4 sm:ml-64 gap-2  flex flex-col h-auto min-h-screen text-white'>
      <div className="w-full flex justify-end">
        <button className="p-2 px-6 bg-transparent border rounded-lg backdrop-blur-md hover:backdrop-blur-xl ">Add User</button>
      </div>
      <div className='  px-5 py-3 backdrop-blur-3xl  rounded-lg border border-gray-200'>
        <div className='flex flex-row w-full gap-4 items-center justify-center text-white   p-3'>
          <div className='w-3/12'>Username</div>
          <div className='w-3/12'>Added Date</div>
          <div className='w-3/12'>Status</div>
          <div className='w-3/12 '>Actions</div>
        </div>
      </div>
      <div className='  px-5 rounded-md border '>
       {datas.map((datass)=>{
        return(
          <>
          <div className='flex flex-row w-full gap-4 items-center justify-center text-white   p-3'>
          <div className='w-3/12'>Mohammed Nihal</div>
          <div className='w-3/12'>10/2/2025</div>
          <div className='w-3/12'>Active</div>
          <div className='w-3/12 flex flex-row gap-2 '>
            <button className="bg-blue-600 rounded-lg p-2 px-4">Add</button>
            <button className="bg-red-600 rounded-lg p-2 px-4">Delete</button>

          </div>
        </div>
          <hr />
          </>
        )
       })}
  

      </div>

      {/* {taskData.map((task) => (

                    <div className='  px-10 py-3 ' key={task._id}>
                        <div className='  flex flex-row w-full shadow-md gap-4 items-center justify-center  p-3 py-7 rounded-xl ' style={{ background: "rgba(255, 255, 255, 0.64)" }} >
                            {

                            }
                            <div className='w-3/12 break-all'>{task.title}</div>
                            <div className='w-4/12  break-all' ><span>{task.description}</span></div>
                            <div className='w-3/12 break-all'>{task?.date.slice(0, 10)}</div>
                            <div className={`w-3/12 ${task?.status === 'Pending' ? 'text-red-500' : "text-green-500"}`}>{task?.status}</div>
                            <div className={`w-2/12 action flex sm:flex-row flex-col gap-3 justify-center items-center`} ><MdOutlineModeEdit onClick={() => handleEdit(task.uid)} size={25} color='blue' /><RiDeleteBin6Line onClick={() => handleDelete(task.uid)} size={25} color='red' /></div>

                        </div>
                    </div>
                ))} */}

                {/* <AddUserModel modelOpen={modelOpen} setModelOpen={setModelOpen}/> */}
    </div>
  );
}

export default Users;
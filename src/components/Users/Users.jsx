import AddUserModel from "../AddUserModel/AddUserModel";
import { useEffect, useState } from "react";
import TableCard from "../TableCard/TableCard";
import { auth, db } from "../../config/firebase-config";
import { useAuthState } from "react-firebase-hooks/auth";
import { onValue, ref } from "firebase/database";

function Users() {
 
  const [modelOpen, setModelOpen] = useState(false)
  const [data, setData] = useState([])


  const handleModel = () => {
    setModelOpen(!modelOpen)
  }
  const [user, loading] = useAuthState(auth)
  useEffect(() => {
    onValue(ref(db, 'users/' + user.uid), (snapdhot) => {
        setData([])
        const data = snapdhot.val();
        if (data !== null) {
            Object.values(data).map((task) => {
                setData((prevTask) => [...prevTask, task]);
            })
        }
    })
}, [])
console.log(data);
  return (



    <div className='p-10 sm:ml-64 gap-2  flex flex-col h-auto min-h-screen text-white'>
      <div className="w-full flex justify-end">
        <button className="p-2 px-6 bg-transparent border rounded-lg backdrop-blur-md hover:backdrop-blur-xl " onClick={handleModel}>Add User</button>
      </div>
      <div className='  px-5 py-3 backdrop-blur-3xl  rounded-lg border border-gray-200'>
        <div className='flex flex-row w-full gap-4 items-center justify-center text-white   p-3'>
          <div className='w-3/12'>Username</div>
          <div className='w-3/12'>Added Date</div>
          <div className='w-3/12'>Status</div>
          <div className='w-3/12'>Actions</div>
        </div>
      </div>
     <TableCard data={data}/>



      <AddUserModel modelOpen={modelOpen} setModelOpen={setModelOpen} />
    </div>
  );
}

export default Users;
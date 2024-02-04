import AddUserModel from "../AddUserModel/AddUserModel";
import { useEffect, useState } from "react";
import TableCard from "../TableCard/TableCard";
import { auth, db } from "../../config/firebase-config";
import { useAuthState } from "react-firebase-hooks/auth";
import { onValue, ref } from "firebase/database";
import { TiArrowUnsorted } from "react-icons/ti";
import { uid } from "uid";


function Users() {

  const [modelOpen, setModelOpen] = useState(false)
  const [data, setData] = useState([])
  const [datas, setDatas] = useState([])
  const [order, setOrder] = useState("ASC")


  const handleModel = () => {
    setModelOpen(!modelOpen)
  }
  const [user, loading] = useAuthState(auth)
  const uuid = uid()
  useEffect(() => {
    onValue(ref(db, 'users/' + user.uid ), (snapdhot) => {
      setData([])
      const data = snapdhot.val();
      if (data !== null) {
        Object.values(data).map((task) => {
          setData((prevTask) => [...prevTask, task]);
        })
      }
    })
  }, [])


  const sorting = (col) => {
    console.log(col);
    if (order === "ASC") {
      const sort = [...data].sort((a, b) => 
       
        a[col].toLowerCase() > b[col].toLowerCase() ? 1 : -1
      )
      setData(sort)
      setOrder("DSC")
    } 
    if (order === "DSC") {
      const sort = [...data].sort((a, b) => 
        a[col].toLowerCase() < b[col].toLowerCase() ? 1 : -1
      )
      setData(sort)
      setOrder("ASC")
    }
    console.log(order);
    
  }
  console.log(datas);
  return (



    <div className='p-10 sm:ml-64 gap-2  flex flex-col  h-full text-white'>
      <div className="w-full flex justify-end">
        <button className="p-2 px-6 bg-transparent border rounded-lg backdrop-blur-md hover:backdrop-blur-xl " onClick={handleModel}>Add User</button>
      </div>
      <div className='  px-5 py-3 backdrop-blur-3xl  rounded-lg border border-gray-200'>
        <div className='flex flex-row w-full gap-4 items-center justify-center text-white cursor-pointer   p-3'>
          <div onClick={() => sorting("username")} className='w-3/12 flex flex-col justify-center md:flex-row items-center'><span>Username</span> <TiArrowUnsorted size={18}/> </div>
          <div onClick={() => sorting("date")} className='w-3/12 flex flex-col justify-center md:flex-row items-center'><span>Added Date</span> <TiArrowUnsorted size={18}/></div>
          <div className='w-3/12'>Status</div>
          <div className='w-3/12'>Actions</div>
        </div>
      </div>
      <TableCard data={data} />



      <AddUserModel modelOpen={modelOpen} setModelOpen={setModelOpen} />
    </div>
  );
}

export default Users;
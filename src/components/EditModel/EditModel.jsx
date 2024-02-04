import { onValue, ref, update } from 'firebase/database';
import React, { useEffect, useState } from 'react';
import { useNavigate, useParams } from 'react-router-dom';
import { auth, db } from '../../config/firebase-config';
import { toast } from 'react-toastify';
import DatePicker from 'react-date-picker';
import { Box, FormControl, InputLabel, MenuItem, Select } from '@mui/material';
import { useAuthState } from 'react-firebase-hooks/auth';
const EditModel = () => {
    const navigate = useNavigate()
    const { id } = useParams()
    const [date, setDate] = useState(new Date());

    const [data, setData] = useState({
        username: "",
        status: "",
        date: date.toISOString(),
    })


    // funtion for updating existing task
    const [user,loading] = useAuthState(auth)

    const handleSubmit = async (e) => {
        e.preventDefault();
        update(ref(db, 'users/' + user.uid + "/" + id), {

            username: data.username,
            status: data.status,
            date: date.toISOString()

        }

        ).then(() => {
            toast.success("Updated")
            navigate("/users")

            setData({
                description: "",
                title: ""
            })

        })
            .catch((err) => {
                console.log(err);
            })


    }

    useEffect(() => {
        onValue(ref(db, 'users/' + user.uid + "/" + id), (snapdhot) => {
            setData({})
            const data = snapdhot.val();
            if (data !== null) {
                
                setData({
                    ...data,
                    username: data.username,
                    status:data.status

                })
                
                setDate(new Date(data.date))

            }
        })
    }, [])
  

    const handleOptionChange = (value) => {
        // setSelectedOption(value);
        setData({
            ...data,
            status:value
        })
    };

  return (
    <div className="relative flex flex-col justify-center min-h-screen overflow-hidden">
    <div className="w-full p-8 m-auto bg-white rounded-md h-full shadow-xl lg:max-w-xl">

        <form className='flex flex-col justify-between items-center  h-full overflow-scroll gap-2' onSubmit={handleSubmit}>
          
            <div className='w-full'>
                            <div className="w-full space-y-12">
                                <div className=" flex flex-row gap-3">
                                    <label for="large-input" className="block mb-2 text-sm font-medium   text-black">Username</label>
                                    <input required value={data.username} onChange={(e) => setData({ ...data, username: e.target.value })} type="text" className="block w-full p-2 border border-gray-300 rounded-lg bg-gray-50 sm:text-md focus:ring-blue-500 focus:border-blue-500  dark:placeholder-gray-400  dark:focus:ring-blue-500 dark:focus:border-blue-500" />
                                </div>

                                <div className=" flex flex-row gap-8">
                                    <label for="large-input" className="block mb-2 text-sm font-medium   text-black">Status</label>
                                    <div>
                                        <input
                                            type="radio"
                                            value="active"
                                            checked={data.status === 'active'}
                                            onChange={() => handleOptionChange('active')}
                                        />
                                        <span>Active</span>
                                    </div>
                                    <div>
                                        <input
                                            type="radio"
                                            value="inactive"
                                            checked={data.status === 'inactive'}
                                            onChange={() => handleOptionChange('inactive')}
                                        />
                                        <span>In Active</span>
                                    </div>
                                </div>
                                <div className=" flex flex-row gap-10">
                                    <label for="large-input" className="block mb-2 text-sm font-medium   text-black">Date </label>
                                    <DatePicker onChange={setDate} required value={date} />
                                </div>
                            </div>
                        </div>

            <div className='mt-8 m-2'>
                <button type='submit' className='p-2 bg-blue-500 rounded-lg px-6 text-white'>Update</button></div>
        </form>
    </div>
</div>
  )
}

export default EditModel

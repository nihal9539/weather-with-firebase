import React, { useState } from 'react';
import Box from '@mui/material/Box';

import Modal from '@mui/material/Modal';

import { ref, set } from "firebase/database";
// import { db } from '../../config/firebase-config';
import { uid } from 'uid';
import { toast } from 'react-toastify';
import DatePicker from 'react-date-picker';


import 'react-date-picker/dist/DatePicker.css';
import 'react-calendar/dist/Calendar.css';
import { IoMdArrowBack } from 'react-icons/io';
import { auth, db } from '../../config/firebase-config';
import { useAuthState } from 'react-firebase-hooks/auth';
import { createUserWithEmailAndPassword } from 'firebase/auth';


export default function AddUserModel({ modelOpen, setModelOpen }) {
    const uuid = uid()
    const windowWidth = window.innerWidth
    const style = {
        position: 'absolute',
        top: '50%',
        left: '50%',
        transform: 'translate(-50%, -50%)',
        bgcolor: 'background.paper',
        borderRadius: "1rem",
        boxShadow: 24,
        p: 4,


    };
    const [user, loading] = useAuthState(auth)

    const [date, setDate] = useState(new Date());
    const [data, setData] = useState({

        username: "",
        status: "active",
    })

    console.log(user);



    // funtion for creating task

    const handleSubmit =  (e) => {
        e.preventDefault();
        // seving user data to real time database
        set(ref(db, 'users/' + user.uid + "/" +uuid),
            {
                uid: uuid,
                username: data.username,
                status: data.status,
                date: date.toISOString()
            }
        ).then(() => {
            toast.success("Task added",{position:"bottom-right"})
            setDate(new Date())
            setData({
                username: "",
                status: "active",
    
    
            })
        }).catch(() => {
            toast.error("Something wrong")

        })




        setModelOpen(false)


    }


    // Function to handle radio button change
    const handleOptionChange = (value) => {
        // setSelectedOption(value);
        setData({
            status:value
        })
    };
    console.log(data.status);
    return (
        <div>

            <Modal
                open={modelOpen}
                onClose={() => setModelOpen(false)}
                aria-labelledby="modal-modal-title"
                aria-describedby="modal-modal-description"
            >
                <Box sx={style} width={`${windowWidth > 600 ? "40%" : "100%"}`} height={`${windowWidth > 500 ? "75vh" : "100vh"}`}>
                    <form className='flex flex-col justify-between items-center  h-full overflow-scroll gap-2' onSubmit={handleSubmit}>
                        <div className=' w-full'>
                            <IoMdArrowBack className='cursor-pointer' size={25} onClick={() => setModelOpen(false)} />
                        </div>
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

                        <div>
                            <button type='submit' className='p-2 bg-blue-500 rounded-lg px-8 text-white'>Add</button>
                        </div>
                    </form>
                </Box>
            </Modal>
        </div>
    );
}

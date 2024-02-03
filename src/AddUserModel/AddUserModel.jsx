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
    const [date, setDate] = useState(new Date());
    const [data, setData] = useState({

        title: "",
        description: "",
    })




    // funtion for creating task

    function handleSubmit(e) {
        e.preventDefault();
        // set(ref(db, 'task/' + user + "/" + uuid),
        //     {
        //         uid: uuid,
        //         user: user,
        //         title: data.title,
        //         description: data.description,
        //         status: "Pending",
        //         startDate: new Date().toISOString(),
        //         date: date.toISOString()
        //     }
        // ).then(() => {
        //     toast.success("Task added")
        //     setDate(new Date())
        // }).catch(() => {
        //     toast.error("Something wrong")

        // })
        // setData({
        //     title: ""
        //     , description: ""
        // })
        setModelOpen(false)


    }
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

                        hiiii
                    </form>



                </Box>
            </Modal>
        </div>
    );
}


import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { auth } from '../../config/firebase-config';
import { sendPasswordResetEmail} from 'firebase/auth';


export default function PasswordReset() {
    const navigate = useNavigate()
    const [email, setEmail] = useState('')


    // Function for forgot password

    const onSubmit = (e) => {
        e.preventDefault();
        sendPasswordResetEmail(auth,email).then((data)=>{
      
            navigate('/login')
        }).then((err)=>{
            console.log(err.message);
        })
        
       
       
    }

    return (
        <div className="relative flex flex-col justify-center min-h-screen overflow-hidden">
            <div className="w-full p-8 m-auto border-2 border-gray-400 backdrop-blur-sm text-white  rounded-md  lg:max-w-xl">
                <h1 className="text-3xl font-semibold text-center  uppercase">
                    Forgot Password
                </h1>
                <form className="mt-6" onSubmit={onSubmit}>
                    <div className="mb-2">
                        <label

                            className="block text-sm font-semibold"
                        >
                            Email
                        </label>
                        <input
                            type="text"
                            value={email}
                            onChange={(e) => setEmail( e.target.value )}
                            className="block w-full px-4 py-2 mt-2   bg-transparent border rounded-md focus:border-white focus:ring-white text-white focus:outline-none focus:ring focus:ring-opacity-10"
                        />
                    </div>
                   
                   

                    <div className="mt-6">
                        <button type='submit' className="w-full px-4 py-2 tracking-wide text-white transition-colors duration-200 transform bg-blue-700 rounded-md ">
                            Submit
                        </button>
                    </div>
                </form>



            </div>
        </div>
    );
}
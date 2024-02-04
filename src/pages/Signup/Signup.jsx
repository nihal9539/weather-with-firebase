
import { createUserWithEmailAndPassword } from 'firebase/auth';
import React, { useState } from 'react';
import { Link, NavLink, Navigate, useNavigate } from 'react-router-dom';
import { auth } from '../../config/firebase-config';
import { toast } from 'react-toastify';


export default function Signup() {
    const navigate = useNavigate()
    const [data, setData] = useState({
        
        password: "",
        email: "",
    })




    // funtion signup with email and password

    const onSubmit = async (e) => {
        e.preventDefault()
       
        await createUserWithEmailAndPassword(auth, data.email, data.password)
          .then((userCredential) => {
              // Signed in
              const user = userCredential.user;
              toast.success("Sign up")
         
              navigate("/")
              // ...
          })
          .catch((error) => {
              const errorCode = error.code;
              const errorMessage = error.message;
              if (errorCode === "auth/weak-password") {
                
                  toast.error("Password must be at least 6 charaters ")
                }else{
                  toast.error("Email already exist ")

              }
              // ..
          });
   
     
      }

    return (
        <div className="relative flex flex-col justify-center min-h-screen overflow-hidden">
            <div className="w-full p-8 m-auto  rounded-md border-2 border-gray-400 backdrop-blur-sm text-white lg:max-w-xl">
                <h1 className="text-3xl font-semibold text-center  uppercase">
                    Sign up
                </h1>
                <form className="mt-6 flex flex-col gap-6" onSubmit={onSubmit}>

                    <div className="mb-2">
                        <label

                            className="block text-sm font-semibold "
                        >
                            Email
                        </label>
                        <input
                        required
                            type="email"
                            value={data.email}
                            onChange={(e) => setData({ ...data, email: e.target.value })}
                            className="block w-full px-4 py-2 mt-2 text-white  bg-transparent border rounded-md focus:border-white focus:ring-white focus:outline-none focus:ring focus:ring-opacity-10"
                        />
                    </div>
                    <div className="mb-2">
                        <label


                            className="block text-sm font-semibold "
                        >
                            Password
                        </label>
                        <input
                        required
                            type="password"
                            value={data.password}
                            onChange={(e) => setData({ ...data, password: e.target.value })}
                            className="block w-full px-4 py-2 mt-2 text-white  bg-transparent border rounded-md focus:border-white focus:ring-white focus:outline-none focus:ring focus:ring-opacity-10"
                        />
                    </div>

                    <div className="mt-6">
                        <button type='submit' className="w-full px-4 py-2 tracking-wide text-white transition-colors duration-200 transform border-2 rounded-md ">
                            Sign Up
                        </button>
                    </div>
                </form>



                <div onClick={() => navigate('/login')} className="mt-8 text-xs text-black font-normal text-center">
                    {" "}
                    Already have an account?{" "}
                    <a
                        href="#"
                        className="font-medium  hover:underline"
                    >
                        Sign In
                    </a>
                </div>
            </div>
        </div>
    );
}
"use client"
import React, { useEffect, useState } from 'react'
import Link from 'next/link'
import { useRouter } from "next/navigation";
import axios from 'axios';


export default function Final({values}) {


  const [error, setError] = useState("");
  const [fullName, setFullName] = useState(values.fullName)
  const [email, setEmail] = useState(values.email)
  const [password, setPassword] = useState(values.password)
  const [gender, setGender] = useState(values.gender)
  const [phoneNumber, setPhoneNumber] = useState(values.phoneNumber)
  const [category, setCategory] = useState(values.category)
  const [username, setUsername] = useState(values.username)

  const router = useRouter();


  const handlesubmit = async(e)=>{
    e.preventDefault()

    try {
      // const res = await fetch("api/userExists", {
      //   method: "POST",
      //   headers:{
      //     "Content-type": "apllication-json",
      //   },
      //   body: JSON.stringify({email})
      // })
      // const {user} = await res.json()

      // if(user){
      //     setError("User already exists")
      //     return;
      // }

      const reg = await axios("api/register/route", {
        method: "POST",
        headers: {
          "content-type": "application-json"
        },
        body: JSON.stringify({
          fullName,
          email,
          password,
          gender,
          phoneNumber,
          category,
          username
        })
      })

      if(reg.ok){
        
          router.push('/')
      }else{
        console.log("registration failed")
      }
      
    } catch (error) {
      console.log(error)
    }

  }

//    const {
//     fullName,
//     email,
//     password,
//     gender,
//     phonenumber,
//     category,
//     username,
//   } = values
// console.log(values.fullName)
  
  return (
    <div className='flex flex-col items-center justify-center'>

     
      

      <button onSubmit={handlesubmit} className="bg-blue-500 hover:bg-black duration-500 w-40 sm:w-96  text-white font-bold font-mono py-2 px-4  rounded focus:outline-none focus:shadow-outline" type="submit">
          completed
           </button>
        
     
    
        </div>
  )
}

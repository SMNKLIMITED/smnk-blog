"use client";
import Link from "next/link";
import { useState } from "react";
import { useRouter } from "next/navigation";
import ClipLoader from "react-spinners/ClipLoader"

export default function signUp() {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [error, setError] = useState("");
  const [loading, setLoading] = useState(false)
  const [color, setColor] = useState("#000000");
  const router = useRouter();

  

 

  return (
    <div className="grid place-items-center h-screen ">

     
      <div className="shadow-lg p-5 rounded-lg border-t-4 border-blue-400 md:w-[600px]">
        <h1 className="text-xl font-bold my-4">Register</h1>

        <form  className="flex flex-col gap-3">
        
       
          <input
            
            type="text"
            placeholder="Full Name"
            className="shadow appearance-none border rounded w-full py-2 px-3 text-grey-700 darktext-white-700 leading-tight focus:outline-none focus:shadow-outline" 

          />
           
          <input
          
            type="text"
            placeholder="Email"
            className="shadow appearance-none border rounded w-full py-2 px-3 text-grey-700 darktext-white-700 leading-tight focus:outline-none focus:shadow-outline" 

          />
           

          <input
            
            type="password"
            placeholder="Password"
            className="shadow appearance-none border rounded w-full py-2 px-3 text-grey-700 darktext-white-700 leading-tight focus:outline-none focus:shadow-outline" 

          />

           <input
           
            type="date"
            placeholder="DOB"
            className="shadow appearance-none border rounded w-full py-2 px-3 text-grey-700 darktext-white-700 leading-tight focus:outline-none focus:shadow-outline" 

          />

<select
      
      className="text-black w-full bg-gray-200 text-gray-700 border border-green-500 rounded py-3 px-4 mb-3 leading-tight focus:outline-none focus:bg-white" id="experience" name="Experience">
    <option> Gender</option>
    <option value="visitor">Male</option>
    <option value="creators">Female</option>
    </select>

          


    <select
      
      className="text-black w-full bg-gray-200 text-gray-700 border border-green-500 rounded py-3 px-4 mb-3 leading-tight focus:outline-none focus:bg-white" id="experience" name="Experience">
    <option> register as ?</option>
    <option value="visitor">Visitor</option>
    <option value="creators">Creator</option>
    </select>

          <button className="bg-blue-600 text-white font-bold cursor-pointer px-6 py-2" onClick={()=>{setLoading(!loading)}}>

          <ClipLoader color={color} loading={loading} size={20} aria-label="Loading Spinner" data-testid="loader"/>
            Register
          </button>

          {error && (
            <div className="bg-red-500 text-white w-fit text-sm py-1 px-3 rounded-md mt-2">
              {error}
            </div>
          )}

          <Link className="text-sm mt-3 text-right" href={"/login"}>
            Already have an account? <span className="underline">Login</span>
          </Link>
        </form>
      </div>
    </div>
  );
}
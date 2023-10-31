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

  const override = {
    display: "block",
    margin: "0 auto",
    borderColor: "red",
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    if (!name || !email || !password) {
      setError("All fields are necessary.");
      return;
    }

    try {
       

      const res = await fetch("api/register/route", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          name,
          email,
          password,
        }),
      });

      if (res.ok) {
        const form = e.target;
        form.reset();
        router.push("/login");
      }
       else {
        setError(" registration failed try again.");
      }
    } catch (error) {
      setError("Error during registration: ", error);
    }
  };

  return (
    <div className="grid place-items-center h-screen ">

     
      <div className="shadow-lg p-5 rounded-lg border-t-4 border-green-400 md:w-[600px]">
        <h1 className="text-xl font-bold my-4">Register</h1>

        <form onSubmit={handleSubmit} className="flex flex-col gap-3">
        
       
          <input
            onChange={(e) => setName(e.target.value)}
            type="text"
            placeholder="Full Name"
            className="shadow appearance-none border rounded w-full py-2 px-3 text-grey-700 darktext-white-700 leading-tight focus:outline-none focus:shadow-outline" 

          />
           
          <input
            onChange={(e) => setEmail(e.target.value)}
            type="text"
            placeholder="Email"
            className="shadow appearance-none border rounded w-full py-2 px-3 text-grey-700 darktext-white-700 leading-tight focus:outline-none focus:shadow-outline" 

          />
           

          <input
            onChange={(e) => setPassword(e.target.value)}
            type="password"
            placeholder="Password"
            className="shadow appearance-none border rounded w-full py-2 px-3 text-grey-700 darktext-white-700 leading-tight focus:outline-none focus:shadow-outline" 

          />

           <input
            onChange={(e) => setPassword(e.target.value)}
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

          <button className="bg-green-600 text-white font-bold cursor-pointer px-6 py-2" onClick={()=>{setLoading(!loading)}}>

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
"use client";

import { Fragment, useState } from "react";
import MyModal from "@/components/alerts/modal";

const Subscribe = () => {
  const [showModal, setShowModal] = useState(false)

  const [email, setEmail] = useState('')
  const [submitted, setSubmitted] = useState(false)
  console.log(email)

 

  //handle submit to the form
  const handleSubmit = (e)=>{
    e.preventDefault()
    setShowModal(true)
    let data = {email}

    fetch('/api/mail/mail', {
      method: "POSt",
      headers:{
        'content-type': 'application/json'
      },  
    body: JSON.stringify(data)
    }).then(res => {
      console.log('response received')
      if(res.status === 200){
        console.log('response succeded')
        setSubmitted(true)
        setEmail('')
        
      }
    }).catch((error)=>{
      console.log(error)
    })

  }


  return (
    <Fragment>
    <section className="container mx-auto px-5 md:px-16">
      
      <div className="bg-blue-600 rounded-lg text-white py-16 sm:py-24">
        <div className="flex flex-col items-center gap-4 sm:gap-6 w-[90%] md:w-4/5 lg:w-1/2 text-center mx-auto">
          <h2 className="text-2xl sm:text-4xl font-semibold">
            Subscribe to our Blog
          </h2>
          <p className="leading-loose font-[500]">
            Get update by subscribing to our news letter
          </p>
          <div className="relative w-full">
            <input
            onChange={(e)=>{setEmail(e.target.value)}}
            name="email"
              type="email"
              placeholder="Enter your email address"
              className=" rounded-full bg-white px-3 py-4 text-center sm:text-left sm:p-6 border-none outline-none w-full font-[500] text-black"
            />
            <button
              variant="outlined"
              onClick={(e) => handleSubmit(e)}
              className="sm:w-fit w-full mt-2 sm:mt-0 capitalize sm:absolute sm:top-2 md:top-[.4rem] sm:right-2 md:text-base text-sm hover:border-2 border-2 border-transparent font-semibold py-4 px-7 text-white bg-blue-500 sm:bg-blue-600 hover:border-blue-600 hover:bg-rose-700 sm:hover:bg-blue-600 hover:shadow-2xl hover:shadow-blue-600  rounded-full"
            >
              submit
            </button>
           
            <MyModal isVisible={showModal} onClose={()=>{setShowModal(false)}} />

            
            
          </div>
        </div>
      </div>
      
    </section>
    </Fragment>
    
  );
};

export default Subscribe;

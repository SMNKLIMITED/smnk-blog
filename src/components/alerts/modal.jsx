import React, { Children } from "react";
import Image from "next/image";

const MyModal = ({isVisible, onClose})=>{
    if(!isVisible) return null;
    const handleClose = (e) =>{
        if(e.target.id === "wrapper") onClose()

    }
    return(
        <div className="fixed inset-0 bg-black bg-opacity-30
        backdrop-blur-sm flex justify-center items-center" id="wrapper" onClick={handleClose}>
            <div className="w-[600px] flex flex-col">
                <button className="text-white text-xl
                place-self-end" onClick={()=> onClose()}>X</button>
                <div className="bg-white">
                    <div className="py-6 px-6 lg:px-8 text-left">
                    <div className="flex flex-col">
                        <h3 className="mb-4 text-xl font-medium text-gray-900 text-center">Congratulations</h3>
                        <h4 className="mb-4 text-xl font-medium text-gray-900 text-center">We have received Your Mail</h4>
                        <div className="flex justify-center items-center">
                        <Image src="/mail.gif" width={150} height={150} alt="mail" className=""/>

                        </div>
            
                        
                
                            

                        </div>
                    </div>
                
             
                </div>

            </div>
        </div>
    )

}

export default MyModal;
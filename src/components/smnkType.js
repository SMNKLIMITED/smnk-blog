import React from "react";
import {TypeAnimation} from "react-type-animation";


function SmnkTypeAnimation(){
    return(
        <div className='mx-4 mb-10 '>
      
       <TypeAnimation 
      sequence={[
        // Same substring at the start will only be typed out once, initially
        'WELCOME TO SMNK_BLOG PLATFORM',
        2000, // wait 1s before replacing 
        'WE CONNECT',
        2000, // wait 2
        `YOU COLLECT`,
        2000, // wait 2
      ]}
      wrapper="span"
      speed={20} // speed set to 20 seconds
      className="flex items-center mt-10 pt-8 text-4xl font-extrabold mx-4 px-10 justify-center tracking-tighter dark:text-smnkwhite  text-smnkwhite"

      repeat={Infinity} // let the animation repeat for forever
    />
    
    
    </div>
    )

}

export default SmnkTypeAnimation;
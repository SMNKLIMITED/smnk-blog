import React from 'react'


const StepperControl = ({handleClick, currentStep, steps}) => {
  return (
    <div className='container flex justify-around mt-4 mb-8'>
        {/* back button */}
        <button onClick={() =>handleClick()} className={`bg-white-500 text-slate uppercase py-2 px-4 rounded-xl font-semibold cursor-pointer border-2 border-slate-300
        hover:bg-black-300 hover:text-white-300 transition duration-200
        ease-in-out ${currentStep === 1
        ? "opacity-50 cursor-not-allowed" : ""}`}>
            Back
        </button>

        {/* next button */}
        <button onClick={() =>handleClick("next")} className='bg-blue-500 text-white uppercase py-2 px-4 rounded-xl font-semibold cursor-pointer
        hover:bg-black-500 hover:text-white-500 transition duration-200
        ease-in-out'>
            {currentStep === steps.length - 1 ? "submit" : "Next"}
        </button>
    </div>
  )
}

export default StepperControl
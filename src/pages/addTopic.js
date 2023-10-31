"use client";
import Link from "next/link";

export default function AddTopic() {
 

  return (
    <div className="flex min-h-screen flex-col items-center justify-between p-24 mt-40">
      <div className="bg-[#212121] p-8 rounded shadow-md w-[500px] h-[500px]">
    <form className="flex flex-col gap-3 items-center">
      <input
       
        
        className="border border-slate-500 px-8 py-2"
        type="text"
        placeholder="Topic Title"
      />

      <input
        className="border border-slate-500 px-8 py-2"
        type="text"
        placeholder="Topic Description"
      />

      <button
        type="submit"
        className="bg-green-600 font-bold text-white py-3 px-6 w-fit"
      >
        <Link href='/topiclist'>Add Topic</Link>
        
      </button>
    </form>
    </div>
    </div>
  );
}
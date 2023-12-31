import Link from "next/link";
import RemoveBtn from "./removebtn";
import { HiPencilAlt } from "react-icons/hi";




export default  function TopicsList() {
 

  return (
    <>
      
        <div
          
          className="p-4 border border-slate-300 my-3 flex justify-between gap-5 items-start"
        >
          <div>
            <h2 className="font-bold text-2xl">niyu</h2>
            <div>bird</div>
          </div>

          <div className="flex gap-2">
            <RemoveBtn />
            <Link href='/editTopic'>
              <HiPencilAlt size={24} />
            </Link>
          </div>
        </div>
    
    </>
  );
}
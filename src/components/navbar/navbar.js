import SearchOutlinedIcon from "@mui/icons-material/SearchOutlined";
import LanguageOutlinedIcon from "@mui/icons-material/LanguageOutlined";
import DarkModeOutlinedIcon from "@mui/icons-material/DarkModeOutlined";
import FullscreenExitOutlinedIcon from "@mui/icons-material/FullscreenExitOutlined";
import NotificationsNoneOutlinedIcon from "@mui/icons-material/NotificationsNoneOutlined";
import ChatBubbleOutlineOutlinedIcon from "@mui/icons-material/ChatBubbleOutlineOutlined";
import ListOutlinedIcon from "@mui/icons-material/ListOutlined";


const Navbar = () => {

  return (
    <div className="h-12 md:h-50 border-b border-gray-300 flex items-center text-base text-gray-500">
      <div className="md:w-[1480px] p-5 md:p-20 flex items-center justify-between">
        <div className="flex items-center border border-gray-300 p-3">
          <input type="text" placeholder="Search..." className="border-none outline-none bg-transparent placeholder-text-sm" />
          <SearchOutlinedIcon />
        </div>
        <div className="flex items-center">
          <div className="flex items-center mr-5 relative">
            <LanguageOutlinedIcon className="icon" />
            English
          </div>
          <div className="flex items-center mr-5 relative">
           
          </div>
          <div className="flex items-center mr-5 relative">
            <FullscreenExitOutlinedIcon className="icon" />
          </div>
          <div className="flex items-center mr-5 relative">
            <NotificationsNoneOutlinedIcon className="icon" />
            <div className="w-6 h-6 md:w-15 md:h-15 bg-red-500 rounded-full text-white flex items-center justify-center text-xs md:text-base font-bold absolute top-0 right-0 -mt-1 -mr-1">1</div>
          </div>
          <div className="flex items-center mr-5 relative">
            <ChatBubbleOutlineOutlinedIcon className="icon" />
            <div className="w-6 h-6 md:w-15 md:h-15 bg-red-500 rounded-full text-white flex items-center justify-center text-xs md:text-base font-bold absolute top-0 right-0 -mt-1 -mr-1">2</div>
          </div>
          <div className="flex items-center mr-5 relative">
            <ListOutlinedIcon className="icon" />
          </div>
          <div className="flex items-center mr-5 relative">
            <img
              src="https://images.pexels.com/photos/941693/pexels-photo-941693.jpeg?auto=compress&cs=tinysrgb&dpr=2&w=500"
              alt=""
              className="w-10 h-10 rounded-full"
            />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Navbar;


import DashboardIcon from "@mui/icons-material/Dashboard";
import PersonOutlineIcon from "@mui/icons-material/PersonOutline";
import LocalShippingIcon from "@mui/icons-material/LocalShipping";
import CreditCardIcon from "@mui/icons-material/CreditCard";
import StoreIcon from "@mui/icons-material/Store";
import InsertChartIcon from "@mui/icons-material/InsertChart";
import SettingsApplicationsIcon from "@mui/icons-material/SettingsApplications";
import ExitToAppIcon from "@mui/icons-material/ExitToApp";
import NotificationsNoneIcon from "@mui/icons-material/NotificationsNone";
import SettingsSystemDaydreamOutlinedIcon from "@mui/icons-material/SettingsSystemDaydreamOutlined";
import AccountCircleOutlinedIcon from "@mui/icons-material/AccountCircleOutlined";
import Link from "next/link";


const Sidebar = () => {
 
  return (
    <div className="flex-6 border-r border-gray-300 min-h-screen bg-white">
      <div className="h-12 flex items-center justify-start">
        <Link href="/" style={{ textDecoration: "none" }}>
          <span className="text-xl md:text-2xl lg:text-3xl font-bold text-indigo-600">SMNK-BLOG</span>
        </Link>
      </div>
      <hr className="h-0 border-t border-gray-300"/>
      <div className="pl-10">
        <ul className="list-none m-0 p-0">
          <p className="text-xs md:text-base font-bold text-gray-400 md:text-gray-600 mt-4 md:mt-15 mb-2 md:mb-5">MAIN</p>
          <li className="flex items-center p-5 cursor-pointer">
            <DashboardIcon className="text-blue-600" />
            <span classname="text-13 font-semibold text-gray-600 ml-2">Dashboard</span>
          </li>
          <p className="text-xs md:text-base font-bold text-gray-400 md:text-gray-600 mt-4 md:mt-15 mb-2 md:mb-5">LISTS</p>
          <Link href="/users" style={{ textDecoration: "none" }}>
            <li className="flex items-center p-5 cursor-pointer">
              <PersonOutlineIcon className="text-blue-600" />
              <span className="text-13 font-semibold text-gray-600 ml-2">Users</span>
            </li>
          </Link>
          <Link href="/products" style={{ textDecoration: "none" }}>
            <li className="flex items-center p-5 cursor-pointer">
              <StoreIcon className="text-18 text-blue-600" />
              <span className="text-13 font-semibold text-gray-600 ml-2">Products</span>
            </li>
          </Link>
          <li className="flex items-center p-5 cursor-pointer">
            <CreditCardIcon className="text-18 text-blue-600" />
            <span className="text-13 font-semibold text-gray-600 ml-2">Orders</span>
          </li>
          <li className="flex items-center p-5 cursor-pointer">
            <LocalShippingIcon className="text-18 text-blue-600" />
            <span className="text-13 font-semibold text-gray-600 ml-2">Delivery</span>
          </li>
          <p className="text-xs md:text-base font-bold text-gray-400 md:text-gray-600 mt-4 md:mt-15 mb-2 md:mb-5">USEFUL</p>
          <li className="flex items-center p-5 cursor-pointer">
            <InsertChartIcon className="text-18 text-blue-600" />
            <span className="text-13 font-semibold text-gray-600 ml-2">Stats</span>
          </li>
          <li className="flex items-center p-5 cursor-pointer">
            <NotificationsNoneIcon className="text-18 text-blue-600" />
            <span className="text-13 font-semibold text-gray-600 ml-2">Notifications</span>
          </li>
          
    
          <p className="text-xs md:text-base font-bold text-gray-400 md:text-gray-600 mt-4 md:mt-15 mb-2 md:mb-5">USER</p>
          <li className="flex items-center p-5 cursor-pointer">
            <AccountCircleOutlinedIcon className="text-18 text-blue-600" />
            <span className="text-13 font-semibold text-gray-600 ml-2">Profile</span>
          </li>
          <li className="flex items-center p-5 cursor-pointer">
            <ExitToAppIcon className="text-18 text-blue-600" />
            <span className="text-13 font-semibold text-gray-600 ml-2">Logout</span>
          </li>
        </ul>
      </div>
      
    </div>
  );
};

export default Sidebar;

import Sidebar from "@/components/sidebar/sidebar";
import Navbar from "@/components/navbar/navbar";
import TopBar from "../../components/navbar/topbar";


const Home = () => {
  return (
    <div className="flex">
      <Sidebar />
      <div className="flex-6">
        <TopBar />
        <div className="flex p-5 gap-5">
          {/* populate */}
          <h1>Welcome Shazaniyu</h1>
        </div>
        
        <div className="shadow-lg p-5 m-5">
          <div className="listTitle">Posts</div>
          {/* all my posts */}
        </div>
      </div>
    </div>
  );
};

export default Home;

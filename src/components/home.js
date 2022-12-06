import NavBar from "./navbar";
import './Home_components/Home.css';
import SideBar from "./Home_components/sidebar";

export default function Home() {
  return (
    <>
      <NavBar />
      <SideBar />
      <div class = "welcome">
        <h1>Welcome to UWC 2.0</h1>
      </div>
    </>
    
  );
}

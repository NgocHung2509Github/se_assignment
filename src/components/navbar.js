import { FiMessageSquare } from "react-icons/fi";

function NavBar (){
    const homeClass = window.location.pathname.match(/^\/home/) ? "active" : "";
    const taskClass = window.location.pathname.match(/^\/task/) ? "active" : "";
    const vehicleClass = window.location.pathname.match(/^\/vehicle/) ? "active" : "";
    const mcpClass = window.location.pathname.match(/^\/mcp/) ? "active" : "";

    return(
        <>
        <nav class = "nav-bar">
            <ul>
                <li className = {homeClass}><a href ="/home">Trang chủ </a></li>
                <li className = {taskClass}><a href ="/task">Giao việc </a></li>
                <li className = {vehicleClass}><a href ="/vehicle">Phương tiện </a></li>
                <li className = {mcpClass}><a href ="/mcp">Địa điểm </a></li>
                <li class = "messageicon"><a href = "/message"><FiMessageSquare /></a></li>
            </ul>
        </nav>
        </>
    );
}

export default NavBar
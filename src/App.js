import Home from "./components/home";
import Task from './components/task';
import AssignTask from "./components/assign_task";
import Vehicle from './components/vehicle';
import MCP from './components/mcp';
import Chat from './components/chatfeed';
import Login from "./Login";
import FirstTab from "./components/Home_components/AllTabs/FirstTab";
import SecondTab from "./components/Home_components/AllTabs/SecondTab";
import Info01 from "./components/Home_components/Info/Info01";
import Info02 from "./components/Home_components/Info/Info02";
import Info03 from "./components/Home_components/Info/Info03";
import Info04 from "./components/Home_components/Info/Info04";
import Info11 from "./components/Home_components/Info/Info11";
import Info12 from "./components/Home_components/Info/Info12";
import Info13 from "./components/Home_components/Info/Info13";
import Info14 from "./components/Home_components/Info/Info14";

function App() {
  let Component
    switch(window.location.pathname){
        case "/":
            Component = Login
            break
        case "/home":
            Component = Home
            break
        case "/task":
            Component = Task
            break
        case "/assign":
            Component = AssignTask
            break
        case "/vehicle":
            Component = Vehicle
            break
        case "/mcp":
            Component = MCP
            break
        case "/message":
            Component = Chat
            break
        case "/cnvs":
            Component = FirstTab
            break
        case "/cncr":
            Component = SecondTab
            break
        case "/cnvs01":
            Component = Info01
            break
        case "/cnvs02":
            Component = Info02
            break
        case "/cnvs03":
            Component = Info03
            break
        case "/cnvs04":
            Component = Info04
            break
        case "/cncr01":
            Component = Info11
            break
        case "/cncr02":
            Component = Info12
            break
        case "/cncr03":
            Component = Info13
            break
        case "/cncr04":
            Component = Info14
            break
        default:
    }
  
  return (  
    <>
      <Component />
    </>
  );
}

export default App;

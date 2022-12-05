import Home from "./components/home";
import Task from './components/task';
import Vehicle from './components/vehicle';
import MCP from './components/mcp';
import Message from './components/message';
import Login from "./Login";

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
        case "/vehicle":
            Component = Vehicle
            break
        case "/mcp":
            Component = MCP
            break
        case "/message":
            Component = Message
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

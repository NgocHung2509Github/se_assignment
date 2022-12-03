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
        default:
    }
  
  return (  
    <>
      <Component />
    </>
  );
}

export default App;

import NavBar from "./navbar";


export default function Vehicle() {
  return (
    <>
      <NavBar />
      <div class = "task-side-bar">
        <h3>Danh sách</h3>
        <ul>
    	    <li>
        	  <div class = "task-border-top"></div>
        	  <a href = "/vehicle">Xe 01</a>
          </li>
          <li><a href = "/vehicle">Xe 02</a></li>
        </ul>
      </div>
    </>
  );
}
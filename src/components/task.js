import NavBar from "./navbar";


export default function Task() {
  return (
    <>
      <NavBar />
      <div class = "task-side-bar">
        <h3>Danh sách</h3>
        <ul>
    	    <li>
        	  <div class = "task-border-top"></div>
        	  <a href = '/task'>Việc đã giao 1</a>
          </li>
          <li><a href = '/task'>Việc đã giao 2</a></li>
        </ul>
      </div>
    
      <div class = "task-content">
    	  <h1>Việc đã giao 1</h1>
        <h3>Ngày 14/11/2022</h3>
        <br/>
        <p>Điểm danh</p>

        <div class = "task-diemdanh">
          <p>CNVS1</p>
          <div class = "active-dot"></div>
        </div>
        <div class = "task-diemdanh">
          <p>CNVS2</p>
          <div class = "active-dot"></div>
        </div>
        <div class = "task-diemdanh">
          <p>CNVS3</p>
          <div class = "active-dot"></div>
        </div>
        <div class = "task-diemdanh">
          <p>CNCR1</p>
          <div class = "active-dot"></div>
        </div>
        <br/>
        <p>Nội dung</p>       
          <span class = "task-box-text1">Địa điểm thu gom rác</span> 
          <span class = "task-box-text2">Phương tiện</span> 
          <span class = "task-box-text3">Lịch làm việc</span> 
          <div class = "task-nd">
            <div class = "task-nd-box">
              <div class = "r1">
                <p class = "task-r-text">Địa chỉ</p>
              </div>
              <div class = "r2">
                <p class = "task-r-text">MCP01</p>
              </div>
              <div class = "r2">
                <p class = "task-r-text">MCP02</p>
              </div>
              <div class = "r2">
                <p class = "task-r-text">MCP03</p>
              </div>
              <div class = "r2">
                <p class = "task-r-text">MCP04</p>
              </div>
              <div class = "r3">
                <p class = "task-r-text">MCP05</p>
              </div>
            </div>

            <div class = "task-nd-box">
          
            </div>

            <div class = "task-nd-box">
          
            </div>
          </div>
          <div class = "task-btn">
            <button class = "change-btn">Chỉnh sửa</button>
            <button class = "finish-btn">Hoàn thành</button>
          </div>
      </div>
    </>
  );
}
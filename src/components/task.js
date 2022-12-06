import NavBar from "./navbar";


export default function Task() {
  const assignTaskClass = window.location.pathname.match(/^\/assign/) ? "side-bar-active" : "";
  const taskClass = window.location.pathname.match(/^\/task/) ? "side-bar-active" : "";
  return (
    <>
      <NavBar />
      <div class = "task-side-bar">
        <h3>Danh sách</h3>
        <ul>
    	    <li>
        	  <div class = "task-border-top"></div>
        	  <a class = {taskClass} href = '/task'>Việc đã giao</a>
          </li>
          <li><a class = {assignTaskClass} href = '/assign'>+ Thêm</a></li>
        </ul>
      </div>
    
      <div class = "task-content">
    	  <h1>Việc đã giao</h1>
        <h3>Ngày: 07/12/2022</h3>
        <h3>Đến: 14/11/2022</h3>
        <br/>
        <p>Điểm danh</p>

        <div class = "task-diemdanh">
          <p>CNVS01</p>
          <div class = "active-dot"></div>
        </div>
        <div class = "task-diemdanh">
          <p>CNVS02</p>
          <div class = "active-dot"></div>
        </div>
        <div class = "task-diemdanh">
          <p>CNVS03</p>
          <div class = "active-dot"></div>
        </div>
        <div class = "task-diemdanh">
          <p>CNCR01</p>
          <div class = "active-dot"></div>
        </div>
        <div class = "task-diemdanh">
          <p>CNCR02</p>
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
                <span class = "task-r-diachi">Số 1, Đường A1, <br/> Quận 1, TPHCM</span>
              </div>
              <div class = "r2">
                <p class = "task-r-text">MCP02</p>
                <span class = "task-r-diachi">Số 1, Đường A2, <br/> Quận 1, TPHCM</span>
              </div>
              <div class = "r2">
                <p class = "task-r-text">MCP03</p>
                <span class = "task-r-diachi">Số 1, Đường A3, <br/> Quận 1, TPHCM</span>
              </div>
              <div class = "r2">
                <p class = "task-r-text">MCP04</p>
                <span class = "task-r-diachi">Số 1, Đường A4, <br/> Quận 1, TPHCM</span>
              </div>
              <div class = "r3">
                <p class = "task-r-text">MCP05</p>
                <span class = "task-r-diachi">Số 1, Đường A5, <br/> Quận 1, TPHCM</span>
              </div>
            </div>

            <div class = "task-nd-box">
              <img class = "vehicle-img" src = "https://www.linkpicture.com/q/xe-ep-rac-isuzu-FVR34LE4-2.jpg" alt = "" width = "150px"></img>
              <p class = "vehicle-text">Xe: Xe01</p>            
              <p class = "vehicle-text">Biển số: 51B-12345</p>            
              <p class = "vehicle-text">Tình Trạng: Sẵn sàng</p>            
            </div>

            <div class = "task-nd-box">
              <ul>
                <li>22:00:00 CNVS bắt đầu thu gom rác ở các khu vực.</li>
                <li>24:00:00 CNVS đem rác đến những nơi thu thập chính.</li>
                <li>01:00:00 CNCR thu gom rác ở những điểm thu thập chính</li>
                <li>02:00:00 Hoàn thành</li>
              </ul>
            </div>
          </div>
          <div class = "task-btn">
            <a href = "/assign"><button class = "change-btn">Chỉnh sửa</button></a>
          </div>
      </div>
    </>
  );
}